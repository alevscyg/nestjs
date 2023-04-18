import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize"
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { RolesModule } from "./roles/roles.module";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { ProfileModule } from './profile/profile.module';
import * as path from 'path';
import { Profile } from "./profile/profile.model";
import { TextblockModule } from './textblock/textblock.module';
import { TextBlock } from "./textblock/textblock.model";
import { FilesblockModule } from './filesblock/filesblock.module';
import { FilesBlock } from "./filesblock/filesblock.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        ServeStaticModule.forRoot({
          rootPath: path.resolve(__dirname, 'static'),
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User,Role,UserRoles,Profile,TextBlock,FilesBlock],
          autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        FilesModule,
        ProfileModule,
        TextblockModule,
        FilesblockModule,
        ]

})
export class AppModule {}
