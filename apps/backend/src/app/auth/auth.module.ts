// NestJs Imports
import { Module } from "@nestjs/common";
// Modules
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

@Module({
  imports: [],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
