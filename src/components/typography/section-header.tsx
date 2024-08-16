export default function SectionHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div className="header-wrapper">
      <h3>{title}</h3>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
}
