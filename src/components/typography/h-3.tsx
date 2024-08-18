export default function H3({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <h3 className={`${cn} h-3-style header`}>{children}</h3>;
}
