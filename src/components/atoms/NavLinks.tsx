import { NavLink } from "react-router-dom";

interface NavLinkType {
  link: string;
  class?: string;
  title: string;
}

const NavLinks = (props: NavLinkType) => {
  const { link, title } = props;
  return (
    <NavLink to={link}>
      <li className={props.class}>{title}</li>
    </NavLink>
  );
};

export default NavLinks;
