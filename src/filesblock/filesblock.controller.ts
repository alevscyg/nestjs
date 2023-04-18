import { Controller,Post,Delete,UseInterceptors,Body,UploadedFile, Param} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesBlockDto } from './dto/filesblock.dto';
import { FilesblockService } from './filesblock.service';

@ApiTags('Файлы')
@Controller('filesblock')
export class FilesblockController {

    constructor(private fileBlockService: FilesblockService){}

  
    @Delete('/empty')
    DeleteEmptyFileBlock(){
        return this.fileBlockService.deleteEmptyFileBlock()
    }
    
    @Delete('/overdate')
    DeleteOverDate(){
        return this.fileBlockService.deleteOverDate()
    }
        
    
}
