/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { AuthLoginDto } from './dto/auth-login.dto';


@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) { }

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this._authService.getUsers();
  }

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<User> {
    return this._authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authLoginDto: AuthLoginDto,
  ): Promise<{ accessToken: string }> {
    return this._authService.signIn(authLoginDto);
  }
}
