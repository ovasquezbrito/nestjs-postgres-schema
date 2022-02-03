/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ schema: "USER_SACP", name: "users" })
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;
 
  @Column()
  email: string

  @Column()
  password: string;

  @Column()
  picture: string;

  @Column()
  codorg: string;

  @Column()
  nombre_rol: string;

  @Column()
  telefono: string;

  @Column()
  salt: string;

 async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}