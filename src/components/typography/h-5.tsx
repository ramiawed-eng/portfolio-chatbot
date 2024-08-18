export default function H5({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <h4 className={`${cn} h-5-style header`}>{children}</h4>;
}
