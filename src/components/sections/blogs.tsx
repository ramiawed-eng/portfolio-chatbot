import { blogsContent } from "@/data/data";
import SectionHeader from "../typography/section-header";
import BlogCard from "../cards/blog-card";

export default function BlogsSection() {
  return (
    <div className="section section-blogs">
      <SectionHeader
        title="Featured Blog"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="section-blogs-content">
        {blogsContent.map((blog, index) => (
          <BlogCard
            key={index}
            imageUrl={blog.imageUrl}
            type={blog.type}
            header={blog.header}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
}
