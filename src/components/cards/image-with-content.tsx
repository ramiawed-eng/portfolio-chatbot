import Image from "next/image";
import H4 from "../typography/h-4";
import Paragraph from "../typography/paragraph";

export default function ImageWithContent({
  header,
  content,
  imgSrc,
  imageLeft,
}: {
  header: string;
  content: string;
  imgSrc: string;
  imageLeft: boolean;
}) {
  return (
    <div className="image-with-content-container">
      <div
        className="image-with-content-header"
        style={{ order: imageLeft ? 2 : 1 }}
      >
        <H4>{header}</H4>
        <Paragraph>{content}</Paragraph>
      </div>
      <div
        className="image-with-content-image"
        style={{ order: imageLeft ? 1 : 2 }}
      >
        <Image src={imgSrc} alt="picture" fill />
      </div>
    </div>
  );
}
