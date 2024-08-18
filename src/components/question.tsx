"use client";

import Image from "next/image";
import { useState } from "react";
import H6 from "./typography/h-6";

export default function Question({ question }: { question: string }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="question-wrapper">
      <div className="question-header" onClick={() => setCollapse(!collapse)}>
        <H6>{question}</H6>
        <div className={`${collapse ? "" : "rotate"} plus-icon`}>
          <Image
            src="/images/icons/icon-plus.png"
            alt="plus"
            width={24}
            height={24}
          />
        </div>
      </div>
      <p className={`${collapse ? "hide" : ""}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </p>
    </div>
  );
}
