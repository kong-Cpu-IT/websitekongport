import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          © 2026 Kongphon Y. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          Made with <Heart className="h-4 w-4 fill-primary text-primary" /> in Bangkok
        </p>
      </div>
    </footer>
  );
}
