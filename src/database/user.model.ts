import { Document, Model, Schema, Types, model, models } from 'mongoose';
import { EUserRole, EUserStatus } from '@/app/types/enum';

// 1. Interface cho user document
export interface IUser extends Document {
  cleckId: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  status: EUserStatus;
  role: EUserRole;
  courses: Types.ObjectId[];
}

// 2. Schema definition
const UserSchema = new Schema<IUser>({
  cleckId: { type: String },
  name: { type: String },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  avatar: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

// 3. Kiểu rõ ràng cho model
export const UserModel: Model<IUser> =
  models.User || model<IUser>('User', UserSchema);
