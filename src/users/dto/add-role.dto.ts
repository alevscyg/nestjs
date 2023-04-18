import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsNumber({},{message:'Должно быть числом'})
    @ApiProperty({example: '1',description: "Пользователь которуму выдаеться роль"})
    readonly userId: number;
    @IsString({message:'Должно быть строкой'})
    @ApiProperty({example: 'ADMIN',description:'Роль выдающаяся пользователю'})
    readonly value: string;
    
}