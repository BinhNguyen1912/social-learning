import z from 'zod';

const configSchema = z.object({
  MONGODB_URL: z.string(),
  DB_NAME: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
});

const configProject = configSchema.safeParse({
  MONGODB_URL: process.env.MONGODB_URL,
  DB_NAME: process.env.DB_NAME,
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
});

if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ');
}
const envConfig = configProject.data;
export default envConfig;
