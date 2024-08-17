import Input from "@/components/fields/input";
import LinkWithIcon from "@/components/fields/link-with-icon";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="auth-header">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={40} />
        </Link>
        <p>
          <span>Already have an account?</span>{" "}
          <Link href="/log-in">Log in</Link>
        </p>
      </div>
      <div className="auth-container">
        <div className="auth-container-header">
          <h3>Sign Up</h3>
          <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
        </div>
        <div className="auth-container-content">
          <form>
            <Input placeholder="username" type="text" id="username" />
            <Input placeholder="password" type="password" id="password" />
            <button>Sign up</button>
          </form>

          <div className="h-[1px] bg-slate-200"></div>
          <LinkWithIcon
            icon="/images/icons/google.svg"
            text="Sign up with Google"
            href="https://www.google.com"
          />
          <LinkWithIcon
            icon="/images/icons/facebook.svg"
            text="Sign up with Facebook"
            href="https://www.google.com"
          />
          <LinkWithIcon
            icon="/images/icons/apple.svg"
            text="Sign up with Apple"
            href="https://www.google.com"
          />
        </div>
      </div>
    </div>
  );
}
