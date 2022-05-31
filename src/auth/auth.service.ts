import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import User from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async register(createUserDto: CreateUserDto): Promise<User>{

        // get user password
        const password = createUserDto.password;

        //generate salt
        const salt = await bcrypt.genSalt();

        // hash password 
        const hashedPassword = await bcrypt.hash(password,salt);

        // use the hashed password as the new password
        createUserDto.password = hashedPassword;

        // call the method responsible for adding the user in the db and return the result
        return await this.userService.addUser(createUserDto);
    }
}
