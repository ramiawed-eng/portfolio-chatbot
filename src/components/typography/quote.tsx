export default function Quote({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <blockquote className={`${cn} quote-style`}>{children}</blockquote>;
}
