"use client";

import H2 from "@/components/typography/h-2";
import H3 from "@/components/typography/h-3";
import { blogsContent } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BlogDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const blog = blogsContent.filter((blog) => blog.id === id)[0];

  return (
    <div className="blog-details">
      <div className="blog-details-content">
        <button onClick={() => router.back()}>&#60; All Posts</button>
        <Link href="/blog">{blog.type}</Link>

        <div className="blog-details-content-header">
          <H2>{blog.header}</H2>
        </div>

        <div className="blog-details-content-image-container">
          <Image src={blog.imageUrl} fill alt="img" />
        </div>

        <p>Published on</p>
        <p>July 25, 2024</p>

        <div className="blog-details-content-details">
          <H3 cn="pb-10">Introduction:</H3>
          <p>
            SaaS, or Software as a Service, has revolutionized the way
            businesses access and utilize software applications. With SaaS,
            organizations no longer need to install or maintain software on
            individual devices. Instead, they can access the software over the
            internet through web browsers
          </p>
        </div>
      </div>
    </div>
  );
}
