import { Outlet } from "react-router-dom";
import Card from "../Components/UI/card/Card";

const Layout = () => {
  return (
    <>
      <Card className="layout">
        <div className="overlay" />
        <Outlet />
      </Card>
    </>
  );
};

export default Layout;
