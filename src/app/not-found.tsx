import { ActionLink } from "@/components/ui/ActionLink";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-2">404</h1>
      <p className="text-muted-foreground mb-8">Page not found.</p>
      <ActionLink href="/" variant="primary" icon="none">
        Back to home
      </ActionLink>
    </div>
  );
}
