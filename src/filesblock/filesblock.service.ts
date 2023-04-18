import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesBlock } from './filesblock.model';
import { FilesService } from 'src/files/files.service';
import { FilesBlockDto } from './dto/filesblock.dto';
import { escape } from 'querystring';
import { Sequelize, or } from 'sequelize';

@Injectable()
export class FilesblockService {
    constructor(@InjectModel(FilesBlock) private filesBlockRepository: typeof FilesBlock,
            private fileService: FilesService){}
        
    async deleteEmptyFileBlock(){ 
        const errfilesblocks = this.filesBlockRepository.findAll({where: Sequelize.or({essenceId:null},{essenceTable:null})})
        if((await errfilesblocks).length===0){
            return 'Пустые записи не обнаружены'
        }
        else if((await errfilesblocks).length===1) {
            (await errfilesblocks)[0].destroy()
            return 'Пустая запись удалена'
        }
        else{
            let i: number
            i=0
            while((await errfilesblocks)){
                try{
                    (await errfilesblocks)[i].destroy()
                    i++
                }
                catch(e){
                   return 'Пустые записи удалены'
                }
            }
            i=0
        }
    }
    async deleteOverDate(){
        const date = new Date()
        const fileBlock = this.filesBlockRepository.findAll()
        let overTimeStr:string =''
        let i:number=0
        while((await fileBlock).length>i){
            if(date.getTime() - ((await fileBlock)[i].createdAt).getTime()>3600000){
                (await (this.filesBlockRepository.findByPk((await fileBlock)[i].id))).destroy()
            }
            i++
        }
        i=0
        return 'Все записи которым больше часа удалены'
    }
}
