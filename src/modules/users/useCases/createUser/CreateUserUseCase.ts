import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailALreadyExist = this.usersRepository.findByEmail(email);

    if (emailALreadyExist) {
      throw new Error("Email already exist");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
