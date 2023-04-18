import { Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";



interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'auth'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: '13', description: 'ИН пользователя'})
    @ForeignKey(()=>User)
    userId: number
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}