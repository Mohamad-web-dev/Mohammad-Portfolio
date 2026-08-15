import { scrollToSection } from "../../utils/scroll";

export default function AnchorLink({ to, children, className, ...rest }) {
  const handleClick = (event) => {
    event.preventDefault();
    scrollToSection(to);
  };

  return (
    <a href={`#${to}`} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
