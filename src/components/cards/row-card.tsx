import { RowCardType } from "@/types";
import Image from "next/image";

export default function RowCard({
  imgSrc,
  text,
  type,
}: {
  imgSrc: string;
  text: string;
  type: RowCardType;
}) {
  return (
    <div
      className={`row-card ${
        type === RowCardType.LEFT ? "border-bottom-none" : "border-top-none"
      } `}
    >
      <Image
        src={imgSrc}
        alt="icon"
        height="35"
        width="35"
        className="row-card-icon"
      />
      <p className="row-card-text">{text}</p>
    </div>
  );
}
