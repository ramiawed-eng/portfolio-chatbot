import { Feature } from "@/types";
import Image from "next/image";
import HeadingThird from "../typography/heading-third";
import ParagraphPrimary from "../typography/paragraph-primary";
import Card from "./card";

export default function FeatureCard({ icon, header, content }: Feature) {
  return (
    <Card>
      <div className="feature-card">
        <Image src={`${icon}`} alt="icon" width="64" height="64" />
        <h4 className="feature-card-header">{header}</h4>
        <ParagraphPrimary text={content} />
      </div>
    </Card>
  );
}
