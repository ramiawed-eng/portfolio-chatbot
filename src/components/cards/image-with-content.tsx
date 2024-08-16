import Image from "next/image";
import HeadingPrimary from "../typography/heading-primary";
import ParagraphPrimary from "../typography/paragraph-primary";

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
        <h4>{header}</h4>
        <p>{content}</p>
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
