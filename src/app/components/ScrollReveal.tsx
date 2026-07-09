interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
