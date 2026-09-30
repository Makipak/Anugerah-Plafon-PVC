import { Breadcrumb, type Crumb } from "@/components/layout/breadcrumb";

export function PageIntro({
  trail,
  label,
  title,
  lead,
  children,
}: {
  trail: readonly Crumb[];
  label?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="panel-seams border-b border-line bg-background">
      <Breadcrumb trail={trail} />
      <div className="container-page pb-12 pt-6 md:pb-16">
        {label ? <p className="text-label mb-3 text-accent">{label}</p> : null}
        <h1 className="text-display max-w-3xl">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-lg text-ink-muted">{lead}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </div>
  );
}
