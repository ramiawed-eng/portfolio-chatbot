export default function Quote({ children }: { children: React.ReactNode }) {
  return <blockquote className="quote-style">{children}</blockquote>;
}
