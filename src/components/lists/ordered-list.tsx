export default function OrderedList({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) {
  return <ol className={`${cn} ordered-list`}>{children}</ol>;
}
