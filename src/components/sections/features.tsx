"use client";

import { featuresContent } from "@/data/data";
import FeatureCard from "../cards/feature-card";
import SectionHeader from "../typography/section-header";
import useInView from "@/hooks/useInView";
import { IntersectionAmount } from "@/types";

export default function FeaturesSection() {
  const inView = useInView({
    id: "feature-header-id",
    intersection: IntersectionAmount.ALL,
  });
  return (
    <section className="section-features section" id="Features">
      <div
        id="feature-header-id"
        className={`fade-in-from-bottom animation-timing-slow ${
          inView ? "show" : ""
        }`}
      >
        <SectionHeader title="Get Better Result with Stunning Features" />
      </div>

      <div className="section-features-content">
        {featuresContent.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            header={feature.header}
            content={feature.content}
            id={`feature-card-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
