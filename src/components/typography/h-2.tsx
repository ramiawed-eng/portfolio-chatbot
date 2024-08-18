export default function H2({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <h2 className={`${cn} h-2-style header`}>{children}</h2>;
}
