export default function Card({
  children,
  darkBorder,
  insideColumns,
  cn,
  id,
}: {
  children: React.ReactNode;
  darkBorder?: boolean;
  insideColumns?: boolean;
  cn?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`${darkBorder ? "dark-border" : ""} ${
        insideColumns ? "full-width" : ""
      } card ${cn}`}
    >
      {children}
    </div>
  );
}
