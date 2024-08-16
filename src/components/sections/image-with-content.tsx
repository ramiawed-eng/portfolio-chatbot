import { imageWithContent } from "@/data/data";
import ImageWithContent from "../cards/image-with-content";

export default function ImageWithContentSection() {
  return (
    <section className="section-images-with-content section">
      {imageWithContent.map((iwc, index) => (
        <ImageWithContent
          header={iwc.header}
          content={iwc.content}
          imgSrc={iwc.imgSrc}
          key={index}
          imageLeft={index % 2 === 0}
        />
      ))}
    </section>
  );
}
