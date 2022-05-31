import { Body, Controller } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import User from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async register(@Body() createUserDto: CreateUserDto): Promise<User>{
    return this.authService.register(createUserDto);
  }
}
