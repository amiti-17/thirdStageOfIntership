import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>) {
    // const parsedBody = await JSON.parse(Object.keys(signInDto)[0]);
    // res
    //   .status(200)
    //   .send(
    //     JSON.stringify(
    //       await this.authService.signIn(parsedBody.email, parsedBody.password),
    //     ),
    //   );
    const returned = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    return returned;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
