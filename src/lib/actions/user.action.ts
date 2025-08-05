import { TUserCreate } from '@/app/types';
import { IUser, UserModel } from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export const CreateUser = async (params: TUserCreate): Promise<IUser> => {
  try {
    await connectToDatabase();
    const user = await UserModel.create(params);
    return user;
  } catch (error) {
    console.log('error', error);

    throw new Error('Failed to create user');
  }
};
