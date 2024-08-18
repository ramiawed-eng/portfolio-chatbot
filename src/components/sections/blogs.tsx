import { blogsContent } from "@/data/data";
import SectionHeader from "../typography/section-header";
import BlogCard from "../cards/blog-card";
import LinkAsButton from "../buttons/link-as-button";
import { ButtonType } from "@/types";
import H1 from "../typography/h-1";
import H2 from "../typography/h-2";
import H3 from "../typography/h-3";
import Paragraph from "../typography/paragraph";
import Quote from "../typography/quote";

export default function BlogsSection({ all }: { all?: boolean }) {
  return (
    <div className="section section-blogs" id="Blogs">
      <SectionHeader
        title={all ? "Latest Post and Insights" : "Featured Blog"}
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="section-blogs-content">
        {blogsContent.slice(0, all ? blogsContent.length : 3).map((blog) => (
          <BlogCard
            id={blog.id}
            key={blog.id}
            imageUrl={blog.imageUrl}
            type={blog.type}
            header={blog.header}
            content={blog.content}
          />
        ))}
      </div>

      {!all && (
        <div className="mx-auto text-center mt-20">
          <LinkAsButton
            type={ButtonType.Secondary}
            href="/blog"
            text="View all"
          />
        </div>
      )}
    </div>
  );
}
