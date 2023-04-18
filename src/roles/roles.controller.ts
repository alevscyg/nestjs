import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}
    @ApiResponse({status:200})
    @Post()
    create(@Body() Roledto: CreateRoleDto) {
        return this.roleService.createRole(Roledto);
    }
    @ApiResponse({status:200})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
