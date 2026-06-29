import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { JoiPipe } from "nestjs-joi";
import { RegisterDTO } from "./dto";

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
  public async register(@Body(JoiPipe) payload: RegisterDTO) {
    return this.authService.register(payload);
  }
}
