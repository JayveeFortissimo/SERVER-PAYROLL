import { IsString, IsNumber, IsEmail, IsEnum } from 'class-validator';

enum Position {
    WOODWINDS = 'WOODWINDS',
    BRASS = 'BRASS',
    PERCUSSION = 'PERCUSSION',
  }

export class SignUpDTO {
  id: number;
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;

  @IsEnum(Position)
  position: Position

  @IsNumber()
  salary: number;
}
