import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table,Model, ForeignKey } from "sequelize-typescript";
import { TextBlock } from "src/textblock/textblock.model";


interface FilesBlockCreationAttrs {
    essenceId: string;
    essenceTable: string;
    image: string;
}

@Table({tableName:'filesblock'})
export class FilesBlock extends Model<FilesBlock,FilesBlockCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example:'14',description: 'ИН таблицы'})
    @Column({type: DataType.STRING})
    essenceId: string;
    @ApiProperty({example:'textblock',description: 'Вид таблицы'})
    @Column({type: DataType.STRING})
    essenceTable: string;
    @ApiProperty({example:'99f03a2e-5c7e-4cce-bad9-737604ad9700.jpg',description: 'Изображение'})
    @Column({type: DataType.STRING})
    image: string;
}