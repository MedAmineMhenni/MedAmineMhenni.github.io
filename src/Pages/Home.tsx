import React, { FC, useEffect, useState } from "react";
import Featuredworks from "../Components/HomePage/Featuredworks";
import Profile from "../Components/HomePage/profile";
import RecentPosts from "../Components/HomePage/RecentPosts";
import IPage from "../Interfaces/page";
import IUserData from "../Interfaces/user";
import UserService from "../Services/UsersService";
const HomePage: FC<IPage> = () => {
  const [user, setUser] = useState<IUserData>(null);
  const fetchUser = () => {
    const fetcheduser = UserService.get();
    console.log("FETCHED USER :: ", fetcheduser);
    setUser(fetcheduser);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    user && (
      <div>
        <Profile user={user} />
        <RecentPosts technologies={user?.technologies} />
        <Featuredworks />
      </div>
    )
  );
};
export default HomePage;
