import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SafeUser } from 'src/users/entities/safe-user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refreshToken-response';

@Injectable()
export class AuthService {
  constructor(private usersServices: UsersService) {}

  async validateUser(email: string, password: string): Promise<SafeUser> {
    const user = await this.usersServices.findOneUnsafe(email);

    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...safeUser } = user; //Ask: is it good? (password)
      return safeUser;
    }

    throw new UnauthorizedException();
  }

  async login() {
    return {
      status: true,
    };
  }

  async logout() {
    return {
      status: true,
    };
  }

  async signup(createUserInput: CreateUserInput) {
    const user = await this.usersServices.findOne(createUserInput.email);

    if (user) throw new Error('User already exists');

    return await this.usersServices.create({
      ...createUserInput,
    });
  }

  async refreshToken(): Promise<RefreshTokenResponse> {
    return { status: true };
  }
}
