import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";
import { UserService } from "./interface/UserService";

export default class DeleteUserService implements UserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    email,
  }: Pick<TUser, "email">): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await this.repo.deleteUser({
        email,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
