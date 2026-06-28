import { Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

// @ApiBearerAuth("")
@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @HttpCode(200)
  @ApiOperation({ summary: "Login admin / staff" })
  public async login() {
    return this.authService.login();
  }

  @Post("register")
  @HttpCode(201)
  @ApiOperation({ summary: "Register new user" })
  public async register() {
    return this.authService.login();
  }
}
