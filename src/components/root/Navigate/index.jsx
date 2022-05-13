import { RoutesNameEnum } from "@/router";
import { Link } from "react-router-dom";

import "./index.scss";

export const Navigate = () => {
  const navs = [
    {
      name: "Домой",
      to: RoutesNameEnum.HOME,
    },
    {
      name: "О нас",
      to: RoutesNameEnum.ABOUT,
    },
  ];
  return (
    <nav>
      {navs.map((nav) => (
        <Link to={nav.to}>{nav.name}</Link>
      ))}
    </nav>
  );
};
