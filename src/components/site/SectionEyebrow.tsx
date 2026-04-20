export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary/60" aria-hidden />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  );
}
