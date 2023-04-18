import { Module, forwardRef } from '@nestjs/common';
import { TextblockController } from './textblock.controller';
import { TextblockService } from './textblock.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TextBlock } from './textblock.model';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';
import { FilesblockModule } from 'src/filesblock/filesblock.module';
import { FilesBlock } from 'src/filesblock/filesblock.model';

@Module({
  controllers: [TextblockController],
  providers: [TextblockService],
  imports:[
    SequelizeModule.forFeature([TextBlock,FilesBlock]),
    forwardRef(()=>AuthModule),
    FilesModule,
    FilesblockModule
  ]
})
export class TextblockModule {}
