import { ButtonType, Pricing } from "@/types";
import Image from "next/image";
import LinkAsButton from "../buttons/link-as-button";
import Card from "./card";

export default function PricingCard({
  name,
  recommanded,
  monthlyPricing,
  options,
  yearlyPricing,
  yearlySaving,
  monthly,
}: Pricing & { monthly: boolean }) {
  return (
    <Card darkBorder={recommanded}>
      <div className={`pricing-card `}>
        <p className="pricing-card-name">{name}</p>
        <p className="pricing-card-price">
          {monthly ? monthlyPricing : yearlyPricing}
          <span>{monthly ? "/mo" : "/yr"}</span>
        </p>
        {!monthly && <p className="pricing-card-saving">Save {yearlySaving}</p>}
        <ul className="pricing-card-options">
          {options?.map((option, index) => (
            <li key={index}>
              <Image
                src="/images/icons/icon-check.svg"
                alt="check"
                width={16}
                height={16}
              />{" "}
              {option}
            </li>
          ))}
        </ul>
        <LinkAsButton href="#" text="Get Started" type={ButtonType.Primary} />
      </div>
    </Card>
  );
}
