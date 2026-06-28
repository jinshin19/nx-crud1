// NestJs Imports
import * as mongoose from "mongoose";
import { ConfigModule } from "@nestjs/config";
import { Inject, Module, OnModuleInit } from "@nestjs/common";
import { getConnectionToken, MongooseModule } from "@nestjs/mongoose";
// Modules
import { AuthModule } from "./auth/auth.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `apps/backend/src/environment/.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRoot(process.env.CRUD1_DATABASE_CONNECTION_1!),
    // Modules
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(
    @Inject(getConnectionToken())
    private connection: mongoose.Connection,
  ) {}

  public onModuleInit() {
    this.connection.on("connected", () =>
      console.log(`Database is connected in ${process.env.NODE_ENV} module`),
    );
    this.connection.on("disconnected", () =>
      console.log(`Database is disconnected in ${process.env.NODE_ENV} module`),
    );
    this.connection.on("error", () =>
      console.log(`Database has error in ${process.env.NODE_ENV} module`),
    );
  }
}
