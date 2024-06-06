import Home from "../pages/Home/index";
import Following from "../pages/Following/index";
import Profile from "../pages/Profile";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
