import { ButtonType } from "@/types";
import Link from "next/link";

export default function LinkAsButton({
  text,
  href,
  type,
}: {
  text: string;
  href: string;
  type: ButtonType;
}) {
  return (
    <Link
      href={href}
      className={`button ${
        type === ButtonType.Primary ? "button-primary" : "button-secondary"
      }`}
    >
      {text}
    </Link>
  );
}
