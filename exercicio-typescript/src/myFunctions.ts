import { User } from "./types/User";

export const getUsersNames = (userList: User[]) : string[] => userList.map((user : User) => user.name);

export const getUsersByRepoQuantity = (users: User[], repos: number) : string[] => users
  .filter((user: User) => user.repositories >= repos).map((user) => user.name);

export const IsMostActiveUser = (name : string, users: User[]) : boolean => {
  const activeUser = users.reduce(
    (prev, curr) => 
      prev.repositories > curr.repositories ? prev : curr,
    );

  return activeUser.name === name;
}