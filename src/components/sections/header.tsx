import { ButtonType, RowCardType } from "@/types";
import RowCard from "../cards/row-card";
import LinkAsButton from "../buttons/link-as-button";
import HeadingPrimary from "../typography/heading-primary";
import ParagraphPrimary from "../typography/paragraph-primary";

export default function HeaderSection() {
  return (
    <section className="section-header section">
      <div className="section-header-wrapper">
        <HeadingPrimary title="Empower Your Business with Smart AI Chatbot One" />

        <div className="px-10 py-10 md:px-28">
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
  );
}
