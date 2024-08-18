export default function H4({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <h4 className={`${cn} h-4-style header`}>{children}</h4>;
}
