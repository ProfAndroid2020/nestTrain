import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  login: string

  @Prop()
  age: number

  @Prop()
  level: string
}

export const UserSchema = SchemaFactory.createForClass(User);