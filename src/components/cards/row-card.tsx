"use client";

import useInView from "@/hooks/useInView";
import { IntersectionAmount, RowCardType } from "@/types";
import Image from "next/image";

export default function RowCard({
  imgSrc,
  text,
  type,
  id,
}: {
  imgSrc: string;
  text: string;
  type: RowCardType;
  id: string;
}) {
  const rowInView = useInView({
    id: id,
    intersection: IntersectionAmount.ALL,
  });
  rowInView;

  return (
    <div
      id={id}
      className={`fade-in  animation-timing-slow ${rowInView ? "show" : ""} ${
        id.endsWith("1") ? "animation-delay-fast" : ""
      }
      ${id.endsWith("2") ? "animation-delay-medium" : ""}
      ${id.endsWith("3") ? "animation-delay-slow" : ""}
      ${id.endsWith("4") ? "animation-delay-x-slow" : ""}
      ${id.endsWith("5") ? "animation-delay-xx-slow" : ""}
      ${id.endsWith("6") ? "animation-delay-xxx-slow" : ""}`}
    >
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
    </div>
  );
}
