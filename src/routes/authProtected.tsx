import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthProtected({ children }: { children: JSX.Element }) {
  const state: any = useSelector((state: any) => state.auth);
  // 如果沒有登入就跳轉到登出
  if (!state.token) return (<Navigate to="/login" replace />);
  else return children;
}
