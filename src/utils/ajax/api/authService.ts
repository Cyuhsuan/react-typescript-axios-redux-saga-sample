import Ajax, { IAjax } from "../index";
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
  constructor(private service: IAjax) {}

  /**登入 */
  public async login(param: ILoginForm) {
    const res: TAuth & TAccountInfo = await this.service
      .post(AUTH_ROUTE.LOGIN, param)
      .then((res: TAuth & TAccountInfo) => res);
    return res;
  }

  /**登出 */
  public async logout() {
    await this.service.post(AUTH_ROUTE.LOGOUT);
  }
}
export default new AuthService(Ajax);
