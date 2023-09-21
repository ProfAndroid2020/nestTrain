import {IsInt, IsString} from "class-validator"

export class CreateUserDto {

  @IsString()
  login: string;

  @IsInt()
  age: number;

  @IsString()
  level: string;
}