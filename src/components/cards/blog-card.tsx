import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import H5 from "../typography/h-5";
import Paragraph from "../typography/paragraph";

export default function BlogCard({
  imageUrl,
  type,
  header,
  content,
  id,
}: Blog) {
  return (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <div className="blog-card-image-wrapper-c">
          <Link href={`/blog/${id}`}>
            <Image src={`${imageUrl}`} fill alt="blog" />
          </Link>
        </div>
      </div>
      <div className="blog-card-info-wrapper">
        <p>
          <Link href="/blog">{type}</Link>
        </p>
        <H5>
          <Link href={`/blog/${id}`}>{header}</Link>
        </H5>
        <Paragraph>{content}</Paragraph>
      </div>
    </div>
  );
}
