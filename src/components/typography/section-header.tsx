import H1 from "./h-1";
import H3 from "./h-3";
import Paragraph from "./paragraph";

export default function SectionHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div className="header-wrapper">
      <H1>{title}</H1>
      <div className="h-6"></div>
      {subTitle && <Paragraph>{subTitle}</Paragraph>}
    </div>
  );
}
