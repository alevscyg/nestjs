import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class FilesBlockDto {
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'5',description:'essenceId'})
    essenceId: string;
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example:'text-block',description:'essenceTable'})
    essenceTable: string;
}