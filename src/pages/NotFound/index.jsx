import { RoutesNameEnum } from "@/router";
import { Link } from "react-router-dom";

import "./index.scss";

export const NotFound = () => {
  return (
    <section>
      <h1>4🙃4</h1>
      <h2>Похоже ты потерялся, вернись на светлую сторону</h2>
      <Link to={RoutesNameEnum.HOME}>👉 Домой 🏠</Link>
    </section>
  );
};
