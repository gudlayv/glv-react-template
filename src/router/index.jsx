import { createRoutes } from "./utils";

import { MainLayout } from "@/layouts/MainLayout";

import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFound } from "@/pages/NotFound";

export const RoutesNameEnum = {
  ROOT: "/",
  HOME: "/",
  ABOUT: "/about",
};

export const routes = [
  {
    path: RoutesNameEnum.ROOT,
    element: <MainLayout />,
    childrens: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RoutesNameEnum.ABOUT,
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createRoutes(routes);
