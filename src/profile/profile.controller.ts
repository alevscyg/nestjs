import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Профиль')
@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService){}
    @ApiResponse({status:200})
    @Post()
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    CProfil(@Body() ProfilDto: ProfileDto){
        return this.profileService.createProfile(ProfilDto)
    }
    @Get('/:userid')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status:200})
    GetProfileById(@Param('userid') userid:number){
        return this.profileService.getProfileByUserId(userid)
    }
    @Put()
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status:200})
    UpdateProfile(@Body() profileDto: ProfileDto){
        return this.profileService.updateProfil(profileDto)
    }

    @Delete('/:userid')
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status:200})
    DeletProfile(@Param('userid') userid: number){
        return this.profileService.deleteProfile(userid)
    }



}
