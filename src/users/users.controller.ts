import {All,Body, Controller,Get,Redirect,Param,Post,Query,} from '@nestjs/common';
// import { get } from 'http';
import { BlogsService } from '../blogs/blogs.service';

@Controller('users')
export class UsersController {
    constructor(private blogservice: BlogsService){}
    @Get()
    userInfo():string{
        return "Dhiraj Zurule"
    }

    @Get('Details')
    historyDetails():object{
          return{"id":1,  "Name":"Dhiraj "};
    }

       
    @Get('blog')
    async bloglist():Promise<any[] >{
       return this.blogservice.findData();
     }
   
    @Post('blog-add')
    blogAdd(@Body() record:any){
        this.blogservice.create(record);
    }
   


}
