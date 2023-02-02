import Ajax from "../index";
import { ILoginForm } from "../../../views/LoginPage";

interface IAuthService {
  login(param: ILoginForm): Promise<TAuth & TAccountInfo>;
  logout(): void;
}

enum AUTH_ROUTE {
  LOGIN = "/login",
  LOGOUT = "/logout",
}

export type TAuth = {
  token: string | null;
};

export type TAccountInfo = {
  id: number;
  email: string | null;
  account: string;
};

class AuthService implements IAuthService {
  public async login(param: ILoginForm) {
    const res: TAuth & TAccountInfo = await Ajax.post(
      AUTH_ROUTE.LOGIN,
      param
    ).then((res) => {
      return res.data;
    });
    return res;
  }

  public async logout() {
    await Ajax.post(AUTH_ROUTE.LOGOUT, {});
  }
}
export default new AuthService();
