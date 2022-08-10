import {  Controller,Get,HttpCode,Param,Post,Query,} from '@nestjs/common';

@Controller('roles')
export class RolesController {
    


    @Get()
    Demo():string{
        return "india is my country"
    }

    @Get('Start')
    DemoStart():string{
        return "india"
    }
   
    @Post('end')
    Demoend():string{
       return "ok add user"
    }
    @Get('List/:id')
    listUser(@Param() record:any):string{
        console.log(record,'===')
        return "List user"+record.id;
    }

    @Get('List')
    listfilterUser(@Query() record:any):string{
        console.log(record,'===')
        return "List Query user"+record.id;
    }
   


}
