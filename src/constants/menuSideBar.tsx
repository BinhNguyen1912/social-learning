import { TMenuSidebar } from '@/app/types';
import { IconAcademic, IconExpore } from '@/components/icon';

export const menuSidebar: TMenuSidebar[] = [
  {
    title: 'Khám phá',
    url: '/',
    icon: <IconExpore className="size-6" />,
    isActive: true,
  },
  {
    title: 'Khu vực học tập',
    url: '/study',
    icon: <IconAcademic className="size-6" />,
    isActive: true,
  },

  {
    title: 'Quản lý',
    url: '',
    icon: <IconAcademic className="size-6" />,
    isActive: true,
    items: [
      {
        title: 'Quản lý thành viên',
        url: '/manage/member',
      },
      {
        title: 'Quản lý khóa học',
        url: '/manage/course',
      },
      {
        title: 'Quản lý đơn hàng',
        url: '/manage/orders',
      },
      {
        title: 'Tutorials',
        url: '#',
      },
    ],
  },
];
