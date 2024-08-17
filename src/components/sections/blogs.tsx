import { blogsContent } from "@/data/data";
import SectionHeader from "../typography/section-header";
import BlogCard from "../cards/blog-card";

export default function BlogsSection({ all }: { all?: boolean }) {
  return (
    <div className="section section-blogs" id="Blogs">
      <SectionHeader
        title="Featured Blog"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="section-blogs-content">
        {blogsContent
          .slice(0, all ? blogsContent.length : 3)
          .map((blog, index) => (
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
