import { IOx } from "../../repos/Ox/interfaces/IOx";
import { TOx } from "../../repos/Ox/types/TOx";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";

export default class UpdateOxServiceS {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute({
    id,
    ownerId,
    earring,
    marked,
    genre,
    born_date,
  }: TOx): Promise<Omit<TOx, "id"> | Error> {
    try {
      const ox = await this.repo.updateOx(
        { id },
        {
          ownerId,
          marked,
          genre,
          earring,
          born_date,
        }
      );

      return ox;
    } catch (error: any) {
      return new PrismaErrorHandler(error);
    }
  }
}
