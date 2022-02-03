/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthLoginDto } from './dto/auth-login.dto';


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const authF = authCredentialsDto;
    const user = new User();
    user.first_name = authF.first_name;
    user.last_name = authF.last_name;
    user.username = authF.username;
    user.email = authF.email;
    user.picture = 'https://pixabay.com/es/photos/gato-gatito-gravedad-dulce-velloso-403245/';
    user.telefono = authF.telefono;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(authF.password, user.salt);
    try {
      return await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authLoginDto: AuthLoginDto,
  ): Promise<string> {
    const { username, password } = authLoginDto;
    const user = await this.findOne({ username });

    if (user && (await user.validatePassword(password))) {
      return user.username;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async getUsers() {
    return await this.createQueryBuilder()
    .select("users")
    .from(User, "users")
    .getMany();
  }
}
