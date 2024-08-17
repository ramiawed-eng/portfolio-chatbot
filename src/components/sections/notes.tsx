import { ButtonType, RowCardType } from "@/types";
import RowCard from "../cards/row-card";
import LinkAsButton from "../buttons/link-as-button";
import HeadingPrimary from "../typography/heading-primary";
import ParagraphPrimary from "../typography/paragraph-primary";
import HeadingSecondary from "../typography/heading-secondary";

export default function NotesSection() {
  return (
    <section className="section-notes section">
      <div className="section-notes-wrapper">
        <HeadingSecondary title="Experience Seamless Support with Our Chatbot One - Get Started Today!" />

        <div className="px-10 py-10 md:px-28">
          <ParagraphPrimary text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." />
        </div>
      </div>

      <div className="section-notes-links">
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
    </section>
  );
}
