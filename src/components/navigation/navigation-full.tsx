import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <Link href="/" className="navigation-img-link">
        <Image src="/images/logo.png" alt="logo" fill />
      </Link>
      <Link href="/#Features" className="navigation-link">
        Features
      </Link>
      <Link href="/#UseCase" className="navigation-link">
        Use Case
      </Link>
      <Link href="/#Pricing" className="navigation-link">
        Pricing
      </Link>
      <Link href="/#Blogs" className="navigation-link">
        Blogs
      </Link>
      <Link href="/#ContactUs" className="navigation-link">
        Contact Us
      </Link>
      <Link href="/sign-up" className="navigation-link">
        Get Started
      </Link>
    </nav>
  );
}
