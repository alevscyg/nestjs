import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
    @IsString({message:'Должно быть строкой'})
    @ApiProperty({example: 'ADMIN',description:'Роль которую вы хотите добавить'})
    readonly value: string;
    @IsString({message:'Должно быть строкой'})
    @ApiProperty({example: 'Администратор',description:'Описание добавляемой роли'})
    readonly description: string;
}
