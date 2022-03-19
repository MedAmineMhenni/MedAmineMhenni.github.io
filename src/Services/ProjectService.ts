import IProjectData from "../Interfaces/project";
import { projects } from "../constants/projects";
const getAll = () => {
  return projects.sort(
    (a: IProjectData, b: IProjectData) =>
      b.createdAt.valueOf() - a.createdAt.valueOf()
  );
};
const get = (id: any) => {
  return projects.find((x: IProjectData) => x.id === id);
};
const getRecentProject = () => {
  return projects
    .sort(
      (a: IProjectData, b: IProjectData) =>
        b.createdAt.valueOf() - a.createdAt.valueOf()
    )
    .slice(0, 2);
};
// const create = (data: IProjectData) => {
//   return http.post<IProjectData>("/tutorials", data);
// };
// const update = (id: any, data: IProjectData) => {
//   return http.put<any>(`/tutorials/${id}`, data);
// };
// const remove = (id: any) => {
//   return http.delete<any>(`/tutorials/${id}`);
// };
// const removeAll = () => {
//   return http.delete<any>(`/tutorials`);
// };
// const findByTitle = (title: string) => {
//   return http.get<Array<IProjectData>>(`/tutorials?title=${title}`);
// };
const ProjectService = {
  getAll,
  get,
  getRecentProject,
  //   create,
  //   update,
  //   remove,
  //   removeAll,
  //   findByTitle,
};
export default ProjectService;
