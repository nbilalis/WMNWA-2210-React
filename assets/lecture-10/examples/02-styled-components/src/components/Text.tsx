interface TextProps {
  className?: string;
  children?: React.ReactNode;
}

function Text({ className, children }: TextProps) {
  return <p className={className}>{children}</p>;
}

export default Text;
