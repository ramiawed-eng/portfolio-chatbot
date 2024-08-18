export default function Paragraph({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <p className={`${cn} p-style`}>{children}</p>;
}
