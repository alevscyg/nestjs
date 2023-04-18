import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Profile } from './profile.model';
import { InjectModel } from '@nestjs/sequelize';
import { ProfileDto } from './dto/create-profile.dto';
import { where } from 'sequelize';
import { first } from 'rxjs';

@Injectable()
export class ProfileService {
    constructor(@InjectModel(Profile) private profileRepository: typeof Profile){}
    
    async createProfile(dto: ProfileDto){
        const userId = dto.userId
        const err = await this.profileRepository.findOne({where:{userId}})
        if(err){
            throw new HttpException('Профиль с таким ID уже зарегистрирован', HttpStatus.BAD_REQUEST)
        }
        const profile = await this.profileRepository.create(dto)
        return profile
    }
    async getProfileByUserId(userId:number){  
        const profile =   await this.profileRepository.findOne({where: {userId: userId}})
        return profile
    }
    async updateProfil(dto:ProfileDto){
        const profile =  await this.profileRepository.findOne({where: {userId: dto.userId}})
        profile.fisrt_name= dto.fisrt_name
        profile.second_name= dto.second_name
        profile.phonenumber= dto.phonenumber
        return profile.save()

    }
    async deleteProfile(userId:number){
        const profile =   await this.profileRepository.findOne({where: {userId: userId}})
        await profile.destroy()
    }
}
