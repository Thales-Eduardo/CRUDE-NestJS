import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo_db:27017/crude_nest'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
