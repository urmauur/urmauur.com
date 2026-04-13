import { FileCard } from ".";

export function FileCardThumbnail() {
  return (
    <div className="bg-secondary/40 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg">
      <div className="flex items-end gap-3">
        <div className="translate-y-2 scale-90 rotate-[-6deg] opacity-60">
          <FileCard formatFile="pdf" />
        </div>
        <div className="translate-y-1 scale-95 rotate-[-2deg] opacity-80">
          <FileCard formatFile="tsx" />
        </div>
        <div className="scale-100">
          <FileCard formatFile="csv" />
        </div>
        <div className="translate-y-1 scale-95 rotate-[2deg] opacity-80">
          <FileCard formatFile="zip" />
        </div>
        <div className="translate-y-2 scale-90 rotate-[6deg] opacity-60">
          <FileCard formatFile="png" />
        </div>
      </div>
    </div>
  );
}
