import { Controller, Post,Body,UseGuards,Get,Put,Delete,Param, UseInterceptors,UploadedFile } from '@nestjs/common';
import { TextblockService } from './textblock.service';
import { TextBlockDto } from './dto/textblock.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Текстовый блок')
@Controller('textblock')
export class TextblockController {
    constructor(private textblockService: TextblockService){}
    
    @Post()
    @ApiResponse({status:200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('image'))
    CreateTextBlock(@Body() textBlockDto: TextBlockDto,
                    @UploadedFile() image){
        return this.textblockService.createTextBlock(textBlockDto,image)


    }
    @Get('/uniquename')
    @ApiResponse({status:200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    GetTextBlocksByUniquename(@Body() textBlockDto: TextBlockDto){
        return this.textblockService.getTextBlockByUniquename(textBlockDto)
    }
    @Get('/group')
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status:200})
    GetTextsBlocksByGroup(@Body() textBlockDto: TextBlockDto){
        return this.textblockService.getTextsBlocksByGroup(textBlockDto)
    }
    @Put()
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @ApiResponse({status:200})
    UpdateTextBlock(@Body() textBlockDto: TextBlockDto){
        return this.textblockService.updateTextBlock(textBlockDto)
    }

    @Delete('/:idT')
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @ApiResponse({status:200})
    DeletTextBlock(@Param('idT') idT:number){
        return this.textblockService.deleteTextBlock(idT)
    }    
}
