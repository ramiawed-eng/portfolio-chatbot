import Input from "@/components/fields/input";
import LinkWithIcon from "@/components/fields/link-with-icon";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="auth-header">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={40} />
        </Link>
        <p>
          <span>Don't have an account?</span>{" "}
          <Link href="/sign-up">Sign up</Link>
        </p>
      </div>
      <div className="auth-container">
        <div className="auth-container-header">
          <h3>Log In</h3>
          <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
        </div>
        <div className="auth-container-content">
          <form>
            <Input placeholder="username" type="text" id="username" />
            <Input placeholder="password" type="password" id="password" />
            <button>Log In</button>
          </form>

          <div className="h-[1px] bg-slate-200"></div>
          <LinkWithIcon
            icon="/images/icons/google.svg"
            text="Log in with Google"
            href="https://www.google.com"
          />
          <LinkWithIcon
            icon="/images/icons/facebook.svg"
            text="Log in with Facebook"
            href="https://www.google.com"
          />
          <LinkWithIcon
            icon="/images/icons/apple.svg"
            text="Log in with Apple"
            href="https://www.google.com"
          />
          <Link href="/forget-password" className="auth-container-content-link">
            Forget your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
