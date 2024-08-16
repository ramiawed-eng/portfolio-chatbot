import { Blog } from "@/types";
import Image from "next/image";

export default function BlogCard({ imageUrl, type, header, content }: Blog) {
  return (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <div className="blog-card-image-wrapper-c">
          <Image src={`${imageUrl}`} fill alt="blog" />
        </div>
      </div>
      <div className="blog-card-info-wrapper">
        <p>{type}</p>
        <h4>{header}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
