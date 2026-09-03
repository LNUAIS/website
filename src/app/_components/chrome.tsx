export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-18 border-b border-chalk/10 px-5 py-16 sm:px-10 sm:py-23 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export function Shell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-[1180px] ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 font-mono text-[11px] tracking-[0.12em] text-gold">
      {children}
    </div>
  );
}

export function Placeholder({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid place-items-center rounded-[3px] border border-dashed border-chalk/22 bg-[repeating-linear-gradient(135deg,rgba(244,243,239,0.05)_0_6px,transparent_6px_14px)] ${className ?? ""}`}
    >
      <span className="font-mono text-[10px] tracking-[0.06em] text-chalk/38">
        {children}
      </span>
    </div>
  );
}
