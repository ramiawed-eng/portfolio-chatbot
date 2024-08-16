import { featuresContent } from "@/data/data";
import HeadingSecondary from "../typography/heading-secondary";
import FeatureCard from "../cards/feature-card";

export default function FeaturesSection() {
  return (
    <section className="section-features section">
      <div className="section-features-header">
        <HeadingSecondary title="Get Better Result with Stunning Features" />
      </div>
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
