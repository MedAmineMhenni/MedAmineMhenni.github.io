import React, { FC } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./Config/routes";
import Layout from "./Routes/Layout";
import "./App.css";
const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
