import { Feature, IntersectionAmount } from "@/types";
import Image from "next/image";
import Card from "./card";
import H4 from "../typography/h-4";
import Paragraph from "../typography/paragraph";
import useInView from "@/hooks/useInView";

export default function FeatureCard({ icon, header, content, id }: Feature) {
  const inView = useInView({
    id: id,
    intersection: IntersectionAmount.HALF,
  });
  return (
    <Card
      id={id}
      cn={`fade-in-from-bottom animation-timing-slow ${inView ? "show" : ""}`}
    >
      <div className={` feature-card`}>
        <Image
          src={`${icon}`}
          alt="icon"
          width="64"
          height="64"
          style={{ paddingBottom: "20px" }}
        />
        <H4>{header}</H4>
        <Paragraph> {content} </Paragraph>
      </div>
    </Card>
  );
}
