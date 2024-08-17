import Image from "next/image";
import Link from "next/link";

export default function LinkWithIcon({
  icon,
  text,
  href,
}: {
  icon: string;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="link-with-icon">
      <Image src={`${icon}`} alt="icon" width={20} height={20} />
      <p>{text}</p>
    </Link>
  );
}
