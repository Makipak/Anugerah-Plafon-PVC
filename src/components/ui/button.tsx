import Link from "next/link";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-control px-5 py-3 font-display text-base font-semibold transition-[background-color,color,transform] duration-150 active:scale-[0.98]";

export const buttonClass: Record<Variant, string> = {
  primary: `${base} bg-primary text-white hover:bg-primary-hover`,
  secondary: `${base} border border-primary bg-transparent text-primary hover:bg-panel`,
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}
