import CourseGrids from '@/components/common/CourseGrids';
import CourseItem from '@/components/courses/course-item';
import Heading from '@/components/heading';
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
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrids>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrids>
    </div>
  );
}
