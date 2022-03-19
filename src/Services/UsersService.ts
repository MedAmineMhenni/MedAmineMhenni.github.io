import IProjectData from "../Interfaces/project";
import { user } from "../constants/users";
import IUserData from "../Interfaces/user";
import { ITechonlogies } from "../Interfaces/user";

const get = (): IUserData[] | any => {
  return user;
};
const getTechnologies = (): ITechonlogies[] => {
  return user.technologies;
};
const UsersService = {
  get,
  getTechnologies,
};
export default UsersService;
