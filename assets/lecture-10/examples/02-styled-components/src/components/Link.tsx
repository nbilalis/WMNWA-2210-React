interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

const Link = ({ className, children }: LinkProps) => (
  <a className={className}>{children}</a>
);

export default Link;
