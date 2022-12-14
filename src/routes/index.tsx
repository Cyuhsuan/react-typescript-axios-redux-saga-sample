import Home from "../components/Home";
interface RouteObject {
  children?: RouteObject[];
  element: React.ReactNode;
  path?: string;
}
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
export default routes;