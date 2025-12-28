import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("./components/TransitionLayout.tsx", [
    route("works", "routes/works.tsx"),
    route("works/:slug", "routes/work-detail.tsx"),
    route("process", "routes/our-process.tsx"),
    route("studio", "routes/our-studio.tsx"),
    route("*", "routes/404.tsx"),
  ]),

  route(".well-known/*", "routes/.well-known.$.tsx"),
] satisfies RouteConfig;
