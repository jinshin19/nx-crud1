// NestJs Imports
import { Model } from "mongoose";
import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
// Shared
import {
  // Interfaces
  type ResponseHandlerI,
  // Handler
  ResponseHandlerService,
  // Schema
  User,
} from "@crud1/shared";
// DTO's
import { RegisterDTO } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<User>,
  ) {}

  private readonly serviceName = "AuthService";

  public async login() {
    try {
      //
    } catch (error) {
      console.log("login", error);
    }
  }

  public async register(payload: RegisterDTO): Promise<ResponseHandlerI> {
    try {
      await this.user.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        middleName: payload.middleName,
        contactNumber: payload.contactNumber,
        birthDate: payload.birthDate,
        gender: payload.gender,
        email: payload.email,
        role: payload.role,
        photo: payload.photo,
        password: payload.password,
      });

      return ResponseHandlerService({
        status: HttpStatus.CREATED,
        success: true,
        message: "Registered Successfully",
      });
    } catch (error: unknown) {
      return ResponseHandlerService({
        status: HttpStatus.BAD_REQUEST,
        success: false,
        message: "Failed to register user",
        errorDetails: {
          name: this.serviceName,
          error,
        },
      });
    }
  }
}
