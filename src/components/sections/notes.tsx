import { ButtonType, RowCardType } from "@/types";
import LinkAsButton from "../buttons/link-as-button";
import H1 from "../typography/h-1";
import Paragraph from "../typography/paragraph";

export default function NotesSection() {
  return (
    <section className="section-notes section">
      <div className="section-notes-wrapper">
        <H1>
          Experience Seamless Support with Our Chatbot One - Get Started Today!
        </H1>

        <div className="px-10 py-10 md:px-28">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Paragraph>
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
