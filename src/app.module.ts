import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/models/entities/user';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username: 'postgres',
      password:'secret',
      database:'myworlddb',
      entities:[User],
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
