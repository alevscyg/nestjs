import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User,Role,UserRoles]),
    RolesModule,
    forwardRef(()=>AuthModule)
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
