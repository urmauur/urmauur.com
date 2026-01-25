import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { hapticFeedback } from "@/lib/haptic";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "peer-checked:bg-primary peer-checked:border-primary",
        destructive:
          "peer-checked:bg-destructive peer-checked:border-destructive",
      },
      size: {
        default: "h-8 w-[52px]",
        sm: "h-6 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface SwitchProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof switchVariants> {
  onCheckedChange?: (checked: boolean) => void;
  showIcons?: boolean;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  haptic?: HapticType;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      size,
      variant,
      checked,
      defaultChecked,
      onCheckedChange,
      showIcons = false,
      checkedIcon,
      uncheckedIcon,
      haptic = "none",
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    const [isPressed, setIsPressed] = React.useState(false);
    const [, setIsHovered] = React.useState(false);

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const newValue = e.target.checked;

      hapticFeedback(haptic);

      if (checked === undefined) {
        setIsChecked(newValue);
      }
      onCheckedChange?.(newValue);
    };

    // Size Calcs
    const isSmall = size === "sm";
    const translateDist = isSmall ? "translate-x-[16px]" : "translate-x-[20px]";
    const handleSizeUnchecked = isSmall
      ? "w-3 h-3 ml-[2px]"
      : "w-4 h-4 ml-[2px]";
    const handleSizeChecked = isSmall ? "w-4 h-4" : "w-6 h-6";
    const handleSizePressed = isSmall
      ? "w-5 h-5 -ml-[2px]"
      : "w-7 h-7 -ml-[2px]";

    // Icon sizing classes
    const iconClasses = isSmall ? "w-2.5 h-2.5" : "w-3.5 h-3.5";

    // Logic to determine if we render any icons
    const shouldRenderIcons = showIcons || checkedIcon || uncheckedIcon;

    return (
      <label
        className={cn(
          "group relative inline-flex items-center justify-center",
          disabled && "cursor-not-allowed opacity-50",
          "min-h-12 min-w-12"
        )}
        style={{ ...style }}
        onPointerDown={() => !disabled && setIsPressed(true)}
        onPointerUp={() => setIsPressed(false)}
        onPointerLeave={() => {
          setIsPressed(false);
          setIsHovered(false);
        }}
        onPointerEnter={() => !disabled && setIsHovered(true)}
      >
        <input
          type="checkbox"
          className="peer sr-only"
          ref={ref}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />

        {/* Track */}
        <div
          className={cn(
            switchVariants({ variant, size }),
            "bg-muted border-border",
            "peer-checked:bg-primary peer-checked:border-primary",
            className
          )}
        >
          {/* Handle Container */}
          <div
            className={cn(
              "pointer-events-none block h-full w-full transition-all duration-300 ease-(--ease-spring)",
              isChecked ? translateDist : "translate-x-0"
            )}
          >
            {/* Handle */}
            <div
              className={cn(
                "absolute top-1/2 left-0.5 flex -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-all duration-300",

                isChecked
                  ? "bg-primary-foreground"
                  : "bg-foreground text-muted",

                isChecked && variant === "primary" && "text-primary",
                isChecked && variant === "destructive" && "text-destructive",

                isPressed
                  ? handleSizePressed
                  : isChecked || (shouldRenderIcons && !isSmall)
                    ? handleSizeChecked
                    : handleSizeUnchecked
              )}
            >
              {/* Icons Rendering */}
              {shouldRenderIcons && (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  {/* Checked State Icon */}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-300",
                      isChecked
                        ? "scale-100 rotate-0 opacity-100"
                        : "scale-50 -rotate-45 opacity-0"
                    )}
                  >
                    {checkedIcon ? (
                      // If custom icon, render it.
                      // We don't force size classes on custom nodes to allow flexibility,
                      // but we provide a wrapper that centers it.
                      checkedIcon
                    ) : (
                      <Check className={iconClasses} strokeWidth={4} />
                    )}
                  </div>

                  {/* Unchecked State Icon */}
                  <div
                    className={cn(
                      "text-muted-foreground absolute inset-0 flex items-center justify-center transition-all duration-300",
                      !isChecked
                        ? "scale-100 rotate-0 opacity-100"
                        : "scale-50 rotate-45 opacity-0"
                    )}
                  >
                    {uncheckedIcon ? (
                      uncheckedIcon
                    ) : (
                      <X className={iconClasses} strokeWidth={4} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
