"use client";
import { useRouter } from "next/navigation";

// data
import { blogsContent } from "@/data/data";

//components
import H2 from "@/components/typography/h-2";
import H3 from "@/components/typography/h-3";
import Paragraph from "@/components/typography/paragraph";
import Image from "next/image";
import Link from "next/link";
import OrderedList from "@/components/lists/ordered-list";
import Quote from "@/components/typography/quote";
import H5 from "@/components/typography/h-5";

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
          <Paragraph>
            SaaS, or Software as a Service, has revolutionized the way
            businesses access and utilize software applications. With SaaS,
            organizations no longer need to install or maintain software on
            individual devices. Instead, they can access the software over the
            internet through web browsers
          </Paragraph>

          <H5 cn="py-8">Enhanced Efficiency:</H5>
          <OrderedList>
            <li>
              The rise of Software as a Service (SaaS) has transformed the
              software industry and how businesses utilize technology. With
              SaaS, users gain access to a vast array of applications and
              services hosted on remote servers. This means they can work on
              these applications from anywhere with an internet connection,
              using various devices like laptops, tablets, or smartphones.
            </li>
          </OrderedList>

          <H5 cn="py-8">Creativity and Innovation:</H5>
          <Quote cn="mb-10">
            Software as a Service (SaaS) is widely used across industries and
            businesses of all sizes for its convenience, scalability, and
            cost-effectiveness. With SaaS, organizations can access and utilize
            software applications over the internet without the need for local
            installations, infrastructure, or maintenance.
          </Quote>

          <OrderedList>
            <li className="mb-5">
              Data-Driven Insights:The Tool isn't just a content generator; it's
              a valuable source of data-driven insights. By analyzing customer
              behavior, market trends, and competitor strategies, the AI
              provides valuable information that can inform your content
              creation and marketing decisions. These insights enable you to
              create targeted, relevant content that resonates with your
              audience and delivers measurable results.
            </li>
            <li>
              Continuous Learning and Improvement:Our Tool is constantly
              evolving and learning. As it generates more content and receives
              feedback, the AI refines its algorithms, improving the quality and
              relevance of the copy it produces. This means that the tool
              becomes even more effective over time, adapting to changing market
              dynamics and helping you stay ahead of the competition.
            </li>
          </OrderedList>

          <H3 cn="py-8">Conclusion:</H3>
          <Paragraph>
            SaaS providers take care of software updates, data security, and
            backups, relieving businesses of such responsibilities and allowing
            them to focus on their core operations. As a result, SaaS has become
            an indispensable tool for businesses seeking efficient, flexible,
            and user-friendly solutions to enhance productivity and achieve
            their strategic objectives.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
