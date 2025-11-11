import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("holu_prime", "routes/holu_prime/index.tsx"),
] satisfies RouteConfig;
