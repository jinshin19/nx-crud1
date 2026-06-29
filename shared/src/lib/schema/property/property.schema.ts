// Constants
export const PropertyStatusC = [
  "sold",
  "available",
  "reserved",
  "unavailable",
] as const;

// NestJs Imports
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// Utils
import { SYSTEM_ID } from "../../utils/id.utils.js";
// Schema options
import { schemaOptions } from "../schema.options.js";

export const RLPropertiesCN = "rl-properties";

@Schema({
  ...schemaOptions,
  collection: RLPropertiesCN,
})
export class Property {
  @Prop({ type: String, default: () => SYSTEM_ID() })
  public readonly _id!: string;

  @Prop({ type: String, required: true })
  public readonly title!: string;

  @Prop({ type: String, default: null })
  public readonly description?: string | null;

  @Prop({ type: String, required: true })
  public readonly projectId!: string;

  @Prop({ type: String, required: true })
  public readonly houseModelId!: string;

  @Prop({ type: String, required: true })
  public readonly price!: string;

  @Prop({ type: String, required: true })
  public readonly reservationFee!: string;

  @Prop({ type: String, enum: PropertyStatusC, required: true })
  public readonly status!: PropertyStatusT;

  @Prop({ type: String, required: true })
  public readonly isFeatured!: string;
  @Prop({ type: String, required: true })
  public readonly isPublished!: string;

  @Prop({ type: String, required: true })
  public readonly location!: PropertyLocationI;

  @Prop({ type: String, required: true })
  public readonly images!: string;

  @Prop({ type: String, required: true })
  public readonly features!: string;

  @Prop({ type: String, required: true })
  public readonly specifications!: PropertySpecficationI;

  @Prop({ type: String, required: true })
  public readonly createdBy!: string;
}

export const Propertychema = SchemaFactory.createForClass(Property);

interface PropertyLocationI {
  country: string;
  province?: string | null;
  city?: string | null;
  barangay?: string | null;
  street: string;
  zipCode: string;
  block?: string | null;
  lot?: string | null;
  latitude?: string | null;
  longitude?: string | null;
}

interface PropertySpecficationI {
  lotArea: string;
  floodArea: string;
  bedrooms: number;
  garageSlot: number;
  floors: string;
}

export type PropertyStatusT = (typeof PropertyStatusC)[number];
