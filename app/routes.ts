import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("works", "routes/works.tsx"),
  route("works/:slug", "routes/work-detail.tsx"),
  route("process", "routes/our-process.tsx"),
  route("studio", "routes/our-studio.tsx"),
  route("404", "routes/404.tsx"),
  route(".well-known/*", "routes/.well-known.$.tsx"),

//   layout("./auth/layout.tsx", [
//     route("login", "./auth/login.tsx"),
//     route("register", "./auth/register.tsx"),
//   ]),

//   ...prefix("concerts", [
//     index("./concerts/home.tsx"),
//     route(":city", "./concerts/city.tsx"),
//     route("trending", "./concerts/trending.tsx"),
//   ]),
] satisfies RouteConfig;
