import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";

export class GetUserByEmailService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute(
    email: string
  ): Promise<Error | Omit<TUser, "id" | "password">> {
    try {
      const user = await this.repo.getUserByEmail({
        email,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
