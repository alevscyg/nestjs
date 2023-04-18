import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TextBlock } from './textblock.model';
import { TextBlockDto } from './dto/textblock.dto';
import { where } from 'sequelize';
import { FilesService } from 'src/files/files.service';
import { FilesblockService } from 'src/filesblock/filesblock.service';
import { FilesBlock } from 'src/filesblock/filesblock.model';
import { group } from 'console';

@Injectable()
export class TextblockService {
    constructor(@InjectModel(TextBlock) private textBlockRepository: typeof TextBlock,
    private fileService: FilesService,
    @InjectModel(FilesBlock) private fileBlockRepository: typeof FilesBlock,
    private fileBlockService: FilesblockService){}
    
    async createTextBlock(dto:TextBlockDto,image:any){
        const fileName = await this.fileService.createFile(image);
        const essenceId = dto.essenceId
        const essenceTable = dto.essenceTable
        const dtoFileBlock = {
            essenceId,
            essenceTable
        }
        
        const textblock = await this.textBlockRepository.create({...dto,image:fileName})
        if(dto){
            await this.fileBlockRepository.create({...dtoFileBlock,image:fileName})
        }
        return textblock
    }

    async getTextBlockByUniquename(dto:TextBlockDto){
        const textblock = await this.textBlockRepository.findOne({where:{uniquename:dto.uniquename}})
        return textblock
    }
    async getTextsBlocksByGroup(dto:TextBlockDto){
        const textblock = await this.textBlockRepository.findAll({where:{group:dto.group}})
        return textblock
    }
    async updateTextBlock(dto:TextBlockDto){
        const textblock = await this.textBlockRepository.findOne({where:{uniquename:dto.uniquename}})
        textblock.title = dto.title;
        textblock.content = dto.content;
        textblock.uniquename = dto.uniquename;
        textblock.group = dto.group;
        textblock.save()
        return textblock
        
    }
    async deleteTextBlock(idT:number){
        try{
            const textblock = await this.textBlockRepository.findOne({where:{id:idT}})
            textblock.destroy()
            try{
                const fileBlock = await this.fileBlockRepository.findOne({where:{essenceId:textblock.essenceId,essenceTable:textblock.essenceTable}})
                    fileBlock.destroy()
                    return `Запись ${idT} успешно удалена`
             }catch(e){
                    throw new HttpException(`Произошла ошибка при поиске записи в filesblock. Запись ${idT} из textblock успешно удалена`, HttpStatus.INTERNAL_SERVER_ERROR)
                }        
            }
        catch(e){
            throw new HttpException('Произошла ошибка при поиске записи в textblock', HttpStatus.INTERNAL_SERVER_ERROR)

        }
    }       
    
}
