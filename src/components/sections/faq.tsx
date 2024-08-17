import { FrequentlyAskQuestion } from "@/data/data";
import SectionHeader from "../typography/section-header";
import Question from "../question";

export default function FAQSection() {
  return (
    <div className="section-faq section">
      <SectionHeader
        title="FAQs"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />

      <div className="section-faq-content">
        {FrequentlyAskQuestion.map((question, index) => (
          <Question question={question} key={index} />
        ))}
      </div>
    </div>
  );
}
