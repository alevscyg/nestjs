import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto{
    @ApiProperty({example: '16',description:'ИН пользователя'})
    @IsNumber({},{message:'Должно быть числом'})
    readonly userId: number;
    @ApiProperty({example: 'Cпам',description:'Причина блокировки'})
    @IsString({message: 'Должно быть строкой'})
    readonly banReason: string;

}