import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, Length, MinLength } from "class-validator";
import { RolesEnum } from "src/enums/user-roles.enum";

export class CreateUserDto{
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(5)
    password: string;

    @IsNotEmpty()
    @Length(8,8)
    @IsNumberString()
    cin: string;

    @IsNumberString()
    @Length(8,8)
    phoneNumber: string;

    @IsEnum(RolesEnum)
    role: RolesEnum;
}