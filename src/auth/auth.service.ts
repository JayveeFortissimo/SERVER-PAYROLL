import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SignUpDTO } from 'interfaces/signup.interfaces.dto';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  public prismaClient = new PrismaClient();

  async signIn() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async signUp(body: SignUpDTO, response) {
    try {
      const { password, email, username, position, salary } = body;

      const salary1 = salary ?? 0;

      const AllDatas = await this.prismaClient.userAuth.findMany();

      const accountExist = AllDatas.find((pro) => pro.email === email);

      if (accountExist)
        return response.json({ message: 'Account Already Exist!' });

      const hashedPasswords = await this.hashedPassword(password);

      const create = await this.prismaClient.userAuth.create({
        data: {
          username,
          email,
          password:hashedPasswords,
          position,
          salary: salary1
        },
      });

      return create;
    } catch (error) {
      console.log(error);
    }
  }

  async hashedPassword(password: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return hash;
  }
}
