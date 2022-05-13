import { Navigate } from "@/components/root/Navigate";
import { Outlet } from "react-router-dom";
import "./index.scss";

export const MainLayout = () => {
  return (
    <>
      <header>
        <h1>I'am header</h1>
        <Navigate />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>I'am footer</h1>
      </footer>
    </>
  );
};
