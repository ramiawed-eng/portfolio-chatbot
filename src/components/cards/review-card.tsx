import { Review } from "@/types";
import Card from "./card";
import ParagraphPrimary from "../typography/paragraph-primary";
import Image from "next/image";

export default function ReviewCard({
  name,
  job,
  content,
  imageUrl,
  insideColumns,
}: Review & { insideColumns: boolean }) {
  return (
    <Card insideColumns={insideColumns}>
      <div className="review-card">
        <ParagraphPrimary text={content} />
        <div className="review-card-info-wrapper">
          <Image
            src={`${imageUrl}`}
            alt="person"
            width={64}
            height={64}
            style={{ borderRadius: "50%" }}
          />
          <div className="review-card-person-info">
            <h4>{name}</h4>
            <p>{job}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
