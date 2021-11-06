import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    type: 'string',
    example: 'Thales Eduardo2',
  })
  @IsString({ message: 'Nome é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  name: string;

  @ApiProperty({
    type: 'string',
    example: 'thalesdev@gmail.com',
  })
  @ApiProperty()
  @IsString({ message: 'Email é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  email: string;

  @ApiProperty({
    type: 'string',
    example: '1234567',
  })
  @ApiProperty()
  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  password: string;
}
