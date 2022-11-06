import { IOx } from "../../repos/Ox/interfaces/IOx";
import { TOx } from "../../repos/Ox/types/TOx";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { RequestCreateOx } from "./types/OxTypes";

export default class CreateOxService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute(
    { earring, born_date, genre, marked }: RequestCreateOx,
    ownerId: number
  ): Promise<Error | Omit<TOx, "id">> {
    try {
      const ox = await this.repo.createOx({
        earring,
        born_date,
        genre,
        marked,
        ownerId,
      });

      return ox;
    } catch (error: any) {
      return new PrismaErrorHandler(error);
    }
  }
}
