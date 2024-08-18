"use client";

import { ButtonType, IntersectionAmount, RowCardType } from "@/types";
import RowCard from "../cards/row-card";
import LinkAsButton from "../buttons/link-as-button";
import H1 from "../typography/h-1";
import Paragraph from "../typography/paragraph";
import useInView from "@/hooks/useInView";

export default function HeaderSection() {
  const h1InView = useInView({
    id: "section-header-animate-h1",
    intersection: IntersectionAmount.ALL,
  });

  return (
    <section className="section-header section">
      <div
        id="section-header-animate-h1"
        className={`fade-in-from-bottom center-conatainer animation-timing-medium ${
          h1InView ? "show" : ""
        }`}
      >
        <div className="section-header-wrapper">
          <H1>Empower Your Business with Smart AI Chatbot One</H1>

          <div className="px-10 py-10 md:px-28">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Paragraph>
          </div>
        </div>

        <div className="section-header-links">
          <LinkAsButton
            href="/sign-up"
            type={ButtonType.Primary}
            text="Get Started"
          />

          <LinkAsButton
            href="/learn-more"
            type={ButtonType.Secondary}
            text="Learn more"
          />
        </div>
      </div>

      <div className="row-card-container row-card-container-left">
        <RowCard
          text="How can I help your?"
          imgSrc="/images/icons/icon-08.png"
          type={RowCardType.LEFT}
          id="row-card-1"
        />

        <RowCard
          text="How can I help your?"
          imgSrc="/images/people/person-01.png"
          type={RowCardType.RIGHT}
          id="row-card-2"
        />

        <RowCard
          text="How can I help your?"
          imgSrc="/images/icons/icon-08.png"
          type={RowCardType.LEFT}
          id="row-card-3"
        />
      </div>

      <div className="row-card-container row-card-container-right">
        <RowCard
          text="How can I help your?"
          imgSrc="/images/icons/icon-08.png"
          type={RowCardType.LEFT}
          id="row-card-4"
        />

        <RowCard
          text="How can I help your?"
          imgSrc="/images/people/person-01.png"
          type={RowCardType.RIGHT}
          id="row-card-5"
        />

        <RowCard
          text="How can I help your?"
          imgSrc="/images/icons/icon-08.png"
          type={RowCardType.LEFT}
          id="row-card-6"
        />
      </div>
    </section>
  );
}
