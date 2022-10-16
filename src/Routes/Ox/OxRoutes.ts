import { Router } from "express";
import GetOxController from "../../controllers/Ox/GetOxController";
import CreateOxController from "../../controllers/Ox/CreateOxController";
import { DeleteOxController } from "../../controllers/Ox/DeleteOxController";

export default class OxRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get("/user/:id/ox", new GetOxController().handle);
    this.router.post("/user/:id/ox", new CreateOxController().handle);
    this.router.delete("/user/ox", new DeleteOxController().handle);
  }

  public export(): Router {
    return this.router;
  }
}
