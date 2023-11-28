import { IsString, IsNotEmpty, Length } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResCreateMessageDto {
  @IsString()
  @Length(1, 16)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: '필터링된 익명 사용자 닉네임(From)'
  })
  readonly sender: string;

  @IsString()
  @Length(1, 500)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: '필터링된 메세지 내용' })
  readonly content: string;
}
