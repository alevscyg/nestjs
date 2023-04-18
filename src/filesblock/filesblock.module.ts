import { Module,forwardRef } from '@nestjs/common';
import { FilesblockService } from './filesblock.service';
import { FilesblockController } from './filesblock.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { FilesBlockDto } from './dto/filesblock.dto';
import { FilesService } from 'src/files/files.service';
import { FilesBlock } from './filesblock.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [FilesblockService],
  controllers: [FilesblockController],
  imports:[
    SequelizeModule.forFeature([FilesBlock]),
    forwardRef(()=>AuthModule),
    FilesModule
  ],
  exports:[
    FilesblockService
  ]
  
})
export class FilesblockModule {}
