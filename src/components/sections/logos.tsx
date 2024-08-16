import { logos } from "@/data/data";
import HeadingThird from "../typography/heading-third";
import Image from "next/image";

export default function LogoSection() {
  return (
    <section className="section-logos section">
      <div className="section-logos-header">
        <HeadingThird title="Used by the world's most top companies" />
      </div>

      <div className="section-logos-wrapper">
        {logos.map((logo, index) => (
          <div key={index} className="logo">
            <Image src={logo.imgSrc} alt="logo" fill />
          </div>
        ))}
      </div>
    </section>
  );
}
