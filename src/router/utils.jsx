import { Route } from "react-router-dom";

export const createRoutes = (childrens) => {
  return childrens.map((route) => {
    if (route.childrens)
      return (
        <Route {...route} key={route.path}>
          {createRoutes(route.childrens)}
        </Route>
      );

    return (
      <Route {...route} key={route.path || Math.random() * 100000000000} />
    );
  });
};
