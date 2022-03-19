import IRoute from "../Interfaces/route";
import HomePage from "../Pages/Home";
import WorksDetails from "../Pages/WorksDetails";
import WorksPage from "../Pages/WorksPage";
import StackTechnologies from "../Pages/SatckTechnologies";
const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    exact: true,
    component: HomePage,
  },
  {
    path: "/works",
    name: "Works Page",
    exact: true,
    component: WorksPage,
  },
  {
    path: "/works/:id",
    name: "Works Page",
    exact: true,
    component: WorksDetails,
  },
  {
    path: "/technologies",
    name: "Technologies Page",
    exact: true,
    component: StackTechnologies,
  },
];
export default routes;
