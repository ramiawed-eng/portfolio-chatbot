"use client";

import { PricingContent } from "@/data/data";
import HeadingSecondary from "../typography/heading-secondary";
import ParagraphPrimary from "../typography/paragraph-primary";
import PricingCard from "../cards/pricing-card";
import { useState } from "react";

export default function PricingSection() {
  const [monthly, setMonthly] = useState(true);

  const toggleMonthly = () => {
    setMonthly(!monthly);
  };

  return (
    <div className="section-pricing section">
      <div className="section-pricing-header">
        <HeadingSecondary title="Pricing plan" />
        <ParagraphPrimary text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>

      <div className="section-pricing-switcher">
        <div className={`${monthly ? "selected" : ""}`} onClick={toggleMonthly}>
          Monthly
        </div>
        <div
          className={`${!monthly ? "selected" : ""}`}
          onClick={toggleMonthly}
        >
          Yearly
        </div>
      </div>

      <div className="section-pricing-content">
        {PricingContent.map((pricePlan, index) => (
          <PricingCard
            key={index}
            name={pricePlan.name}
            recommanded={pricePlan.recommanded}
            monthlyPricing={pricePlan.monthlyPricing}
            yearlyPricing={pricePlan.yearlyPricing}
            options={pricePlan.options}
            yearlySaving={pricePlan.yearlySaving}
            monthly={monthly}
          />
        ))}
      </div>
    </div>
  );
}
