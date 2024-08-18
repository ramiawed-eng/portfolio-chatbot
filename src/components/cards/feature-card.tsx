import { Feature } from "@/types";
import Image from "next/image";
import Card from "./card";
import H4 from "../typography/h-4";
import Paragraph from "../typography/paragraph";

export default function FeatureCard({ icon, header, content }: Feature) {
  return (
    <Card>
      <div className="feature-card">
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
