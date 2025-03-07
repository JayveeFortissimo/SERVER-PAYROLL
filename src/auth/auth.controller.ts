import { Controller, Get, Post, HttpStatus, Res, Body, ValidationPipe} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignUpDTO } from 'interfaces/signup.interfaces.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async signUp(@Res() response: Response, @Body(ValidationPipe) body:SignUpDTO) {
    try {
      await this.authService.signUp(body, response);

      return response.status(HttpStatus.OK).json({
        message: 'Success SignUP!',
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error,
      });
    }
  }
}
