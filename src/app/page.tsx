import LinkAsButton from "@/components/buttons/link-as-button";
import HeadingPrimary from "@/components/typography/heading-primary";
import ParagraphPrimary from "@/components/typography/paragraph-primary";
import { ButtonType } from "@/types";

export default function Home() {
  return (
    <section className="section-header">
      <div className="section-header-wrapper">
        <HeadingPrimary title="Empower Your Business with Smart AI Chatbot One" />

        <div className="px-20 py-20">
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
    </section>
  );
}
