import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class TextBlockDto{
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'23',description: 'essenceId'})
    essenceId: string
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'text-block',description: 'Тип таблицы'})
    essenceTable:string;
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'Скидки',description: 'Название тексового блока'})
    title: string;
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'Скидки на электронику **** по адресу ****!!! Работаем с *** до ***',description: 'Основной текст'})
    content: string;
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'main-hero-text',description: 'Уникальное название для поиска'})
    uniquename: string;
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'main-page',description: 'Группа страницы'})
    group:string
}