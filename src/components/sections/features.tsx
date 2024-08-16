import { featuresContent } from "@/data/data";
import HeadingSecondary from "../typography/heading-secondary";
import FeatureCard from "../cards/feature-card";
import SectionHeader from "../typography/section-header";

export default function FeaturesSection() {
  return (
    <section className="section-features section">
      <SectionHeader title="Get Better Result with Stunning Features" />
      {/* <div className="section-features-header">
        <HeadingSecondary title="Get Better Result with Stunning Features" />
      </div> */}
      <div className="section-features-content">
        {featuresContent.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            header={feature.header}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  );
}
