import { reviewsContent } from "@/data/data";
import HeadingSecondary from "../typography/heading-secondary";
import ParagraphPrimary from "../typography/paragraph-primary";
import Card from "../cards/card";
import ReviewCard from "../cards/review-card";

export default function ReviewsSection() {
  return (
    <div className="section-reviews section">
      <div className="section-reviews-header">
        <HeadingSecondary title="You're in Good Company" />
        <ParagraphPrimary text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>

      <div className="section-reviews-content">
        {reviewsContent.map((review, index) => (
          <ReviewCard
            key={index}
            content={review.content}
            name={review.name}
            imageUrl={review.imageUrl}
            job={review.job}
            insideColumns={true}
          />
        ))}
      </div>
    </div>
  );
}
