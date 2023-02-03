import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import AuthProtected from "./authProtected";
interface RouteObject {
  children?: RouteObject[];
  element: React.ReactNode;
  path: string;
}
const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <AuthProtected>
        <HomePage />
      </AuthProtected>
    ),
  },
  {
    path: "*",
    element: `There's nothing here: 404!`,
  },
];
export default routes;