// NestJs Imports
import { Module } from "@nestjs/common";
// Modules
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
// Shared
import {
  // Schema
  User,
  UserSchema,
} from "@crud1/shared";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        // User
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
