import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table,Model } from "sequelize-typescript";


interface TextBlockCreationAttrs {
    essenceId: string
    essenceTable: string;
    title: string;
    content: string;
    image: string;
    uniquename: string;
    group:string
}

@Table({tableName:'textblock'})
export class TextBlock extends Model<TextBlock,TextBlockCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example:'54',description: 'essenceId'})
    @Column({type: DataType.STRING, unique: true})
    essenceId: string;
    @ApiProperty({example:'text-block',description: 'Тип таблицы'})
    @Column({type: DataType.STRING})
    essenceTable:string;
    @ApiProperty({example:'Скидки',description: 'Название тексового блока'})
    @Column({type: DataType.STRING})
    title: string;
    @ApiProperty({example:'Скидки на электронику **** по адресу ****!!! Работаем с *** до ***',description: 'Основной текст'})
    @Column({type: DataType.STRING})
    content: string;
    @ApiProperty({example:'99f03a2e-5c7e-4cce-bad9-737604ad9700.jpg',description: 'Изображение'})
    @Column({type: DataType.STRING})
    image: string;
    @ApiProperty({example:'main-hero-text',description: 'Уникальное название для поиска'})
    @Column({type: DataType.STRING, unique: true})
    uniquename: string;
    @ApiProperty({example:'main-page',description: 'Группа страницы'})
    @Column({type: DataType.STRING})
    group:string

}