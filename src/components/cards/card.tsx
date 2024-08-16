export default function Card({
  children,
  darkBorder,
  insideColumns,
}: {
  children: React.ReactNode;
  darkBorder?: boolean;
  insideColumns?: boolean;
}) {
  return (
    <div
      className={`${darkBorder ? "dark-border" : ""} ${
        insideColumns ? "full-width" : ""
      } card`}
    >
      {children}
    </div>
  );
}
