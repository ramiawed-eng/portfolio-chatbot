import LinkAsButton from "@/components/buttons/link-as-button";
import RowCard from "@/components/cards/row-card";
import HeadingPrimary from "@/components/typography/heading-primary";
import HeadingThird from "@/components/typography/heading-third";
import ParagraphPrimary from "@/components/typography/paragraph-primary";
import { logos } from "@/data/data";
import { ButtonType, RowCardType } from "@/types";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="section-header">
        <div className="section-header-wrapper">
          <HeadingPrimary title="Empower Your Business with Smart AI Chatbot One" />

          <div className="px-10 py-10">
            <ParagraphPrimary
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
            />
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

        <div className="row-card-container row-card-container-left">
          <RowCard
            text="How can I help your?"
            imgSrc="/images/icons/icon-08.png"
            type={RowCardType.LEFT}
          />

          <RowCard
            text="How can I help your?"
            imgSrc="/images/people/person-01.png"
            type={RowCardType.RIGHT}
          />

          <RowCard
            text="How can I help your?"
            imgSrc="/images/icons/icon-08.png"
            type={RowCardType.LEFT}
          />
        </div>

        <div className="row-card-container row-card-container-right">
          <RowCard
            text="How can I help your?"
            imgSrc="/images/icons/icon-08.png"
            type={RowCardType.LEFT}
          />

          <RowCard
            text="How can I help your?"
            imgSrc="/images/people/person-01.png"
            type={RowCardType.RIGHT}
          />

          <RowCard
            text="How can I help your?"
            imgSrc="/images/icons/icon-08.png"
            type={RowCardType.LEFT}
          />
        </div>
      </section>

      <section className="section-logos">
        <div className="section-logos-header">
          <HeadingThird title="Used by the world's most top companies" />
        </div>

        <div className="section-logos-wrapper">
          {logos.map((logo, index) => (
            <div key={index} className="logo">
              <Image src={logo.imgSrc} alt="logo" fill />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
