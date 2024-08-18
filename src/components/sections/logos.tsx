"use client";

import { logos } from "@/data/data";
import Image from "next/image";
import H5 from "../typography/h-5";
import useInView from "@/hooks/useInView";
import { IntersectionAmount } from "@/types";

export default function LogoSection() {
  const sectionInView = useInView({
    id: "logo-section",
    intersection: IntersectionAmount.HALF,
  });
  return (
    <div
      id="logo-section"
      className={`fade-in-from-bottom ${
        sectionInView ? "show" : ""
      } animation-timing-slow`}
    >
      <section className="section-logos section">
        <div className="section-logos-header">
          <H5>Used by the world's most top companies</H5>
        </div>

        <div className="section-logos-wrapper">
          {logos.map((logo, index) => (
            <div key={index} className="logo">
              <Image src={logo.imgSrc} alt="logo" fill />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
