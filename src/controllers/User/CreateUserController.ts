import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { CreateUserService } from "../../services/User";
import UserController from "./interface/UserController";

export default class CreateUserController implements UserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const { name, email, password, brand } = req.body;
    const service = new CreateUserService(new UserRepo());
    const result = await service.execute({
      name,
      email,
      password,
      brand,
    });

    if (result instanceof Error) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }

    res.status(200).json({
      result,
    });
  }
}
