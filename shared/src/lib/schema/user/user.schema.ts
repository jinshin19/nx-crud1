// Constants
export const UserGenderC = ["male", "female"] as const;

// NestJs Imports
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// Utils
import { SYSTEM_ID } from "../../utils/id.utils.js";
// Schema options
import { schemaOptions } from "../schema.options.js";

export const RLCN = "rl-users";

@Schema({
  ...schemaOptions,
  collection: RLCN,
})
export class User {
  @Prop({ type: String, default: () => SYSTEM_ID() })
  public readonly _id!: string;

  @Prop({ type: String, required: true })
  public readonly firstName!: string;

  @Prop({ type: String, required: true })
  public readonly lastName!: string;

  @Prop({ type: String, default: null })
  public readonly middleName?: string | null;

  @Prop({ type: String, default: null })
  public readonly contactNumber?: string | null;

  @Prop({ type: String, required: true })
  public readonly birthDate!: string;

  @Prop({ type: String, enum: UserGenderC, required: true })
  public readonly gender!: UserGenderT;

  @Prop({ type: String, default: null })
  public readonly email?: string | null;

  @Prop({ type: String, required: true })
  public readonly role!: string;

  @Prop({ type: String, default: null })
  public readonly photo?: string | null;

  @Prop({ type: String, default: null })
  public readonly password?: string | null;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserGenderT = (typeof UserGenderC)[number];
