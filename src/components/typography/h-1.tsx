export default function H1({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <h1 className={`${cn} h-1-style header`}>{children}</h1>;
}
