import { IconAcademic } from '@/components/icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const coursesMenuItem: {
  title: string;
  icon: (className?: string) => React.ReactNode;
}[] = [
  {
    title: '3000',
    icon: (className?: string) => <IconAcademic className={className} />,
  },
  {
    title: '3000',
    icon: (className?: string) => <IconAcademic className={className} />,
  },
  {
    title: '3000',
    icon: (className?: string) => <IconAcademic className={className} />,
  },
];

export default function CourseItem() {
  return (
    <div className="mt-8 bg-white dark:bg-grayDarker shadow-md rounded-2xl p-4">
      <Link href={'#'} className="h-[180px] block relative">
        <Image
          src={
            'https://i.pinimg.com/736x/14/e1/b0/14e1b04d2f6a3bd6d409f85a1ad08164.jpg'
          }
          alt=""
          width={300}
          height={100}
          priority
          className="w-full h-full object-cover rounded-2xl pt-2 pb-2"
          sizes="@media(min-width: 640px) 300px, 100vw"
        ></Image>
        <span className="absolute bg-green-400 z-10 top-5 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
          new
        </span>
      </Link>
      <div className="py-4">
        <h3 className="text-sm font-semibold mb-6">
          Lấy gốc Anh Ngữ trong vòng 30 phút
        </h3>
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
            {coursesMenuItem.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon('size-5 pr-1')}
                <span className="pr-2">{item.title}</span>
              </div>
            ))}
          </div>
          <span className="font-semibold text-red-400">799.000</span>
        </div>

        <Link href={'#'}>
          <span className="text-sm bg-red-400 flex items-center justify-center h-9 rounded-3xl font-semibold mt-4 ">
            Xem chi tiết
          </span>
        </Link>
      </div>
    </div>
  );
}
