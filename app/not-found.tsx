import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Folder } from "@/components/publish/folder";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center py-16">
      <div className="flex flex-col items-center gap-8 text-center">
        <Folder color="grey" size="md" label="404" />
        <div>
          <h1 className="mb-2 text-xl font-normal">Page not found</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
        >
          <ChevronLeft className="h-3 w-3" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
