import { Review } from "@/types";
import Card from "./card";
import Image from "next/image";
import Paragraph from "../typography/paragraph";
import H6 from "../typography/h-6";

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
        <Paragraph>{content}</Paragraph>
        <div className="review-card-info-wrapper">
          <Image
            src={`${imageUrl}`}
            alt="person"
            width={64}
            height={64}
            style={{ borderRadius: "50%" }}
          />
          <div className="review-card-person-info">
            <H6>{name}</H6>
            <Paragraph>{job}</Paragraph>
          </div>
        </div>
      </div>
    </Card>
  );
}
