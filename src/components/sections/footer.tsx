import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <div className="section-footer">
      <div className="section-footer-top">
        <div className="section-footer-top-icon">
          <Image src="/images/logo.png" alt="logo" width={150} height={50} />
        </div>
        <div className="section-footer-top-links">
          <Link href="#" className="section-footer-top-links-link">
            Home
          </Link>
          <Link href="#" className="section-footer-top-links-link">
            Blog
          </Link>
          <Link href="#" className="section-footer-top-links-link">
            Contact
          </Link>
          <Link href="#" className="section-footer-top-links-link">
            Liscene
          </Link>
        </div>
        <div className="section-footer-top-logos">
          <Image
            src="/images/icons/facebook.svg"
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src="/images/icons/instagram.svg"
            alt="instagram"
            width={24}
            height={24}
          />
          <Image
            src="/images/icons/linkedin.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
          <Image src="/images/icons/x.svg" alt="x" width={24} height={24} />
          <Image
            src="/images/icons/youtube.svg"
            alt="x"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="section-footer-bottom">
        <Link href="#" className="section-footer-bottom-link">
          Privacy Policy
        </Link>
        <Link href="#" className="section-footer-bottom-link">
          Terms of Service
        </Link>
        <Link href="#" className="section-footer-bottom-link">
          Cookies Settings
        </Link>
      </div>
    </div>
  );
}
