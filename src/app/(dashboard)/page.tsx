import CourseGrids from '@/components/common/CourseGrids';
import CourseItem from '@/components/courses/course-item';
import Heading from '@/components/heading';
import envConfig from '@/config';
import { CreateUser } from '@/lib/actions/user.action';
import React from 'react';

export default async function Page() {
  // const user = await CreateUser({
  //   cleckId: 'userId',
  //   email: 'ahihi@gmail.com',
  //   username: 'ahihi',
  //   name: 'ahihi',
  //   avatar: 'ahihi',
  // });
  // console.log(
  //   envConfig.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  //   envConfig.WEBHOOK_SECRET
  // );
  const hi = envConfig.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const ha = envConfig.CLERK_SECRET_KEY;
  const webhookSecret: string = envConfig.WEBHOOK_SECRET;
  return (
    <div>
      <Heading>
        Khám phá {hi} {ha} {webhookSecret}
      </Heading>
      <CourseGrids>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrids>
    </div>
  );
}
