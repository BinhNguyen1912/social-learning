import { Model, Document, model, models, Schema, Types } from 'mongoose';
import { EUserRole, EUserStatus } from '@/app/types/enum';

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

const UserSchema = new Schema<IUser>({
  cleckId: String,
  name: String,
  username: String,
  email: String,
  avatar: String,
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

export const UserModel: Model<IUser> =
  models.User || model<IUser>('User', UserSchema);
