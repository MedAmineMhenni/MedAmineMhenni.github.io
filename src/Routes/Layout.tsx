import React, { FC, ReactNode } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
interface IRouteChildrens {
  children: ReactNode;
}

const Layout: FC<IRouteChildrens> = ({ children }: IRouteChildrens) => {
  return (
    <div className={"layout"}>
      <Header />
      <div className={"layout-content-container"}>
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
