export type TActiveLinkProps = {
  href: string;
  children: React.ReactNode;
};
type TMenuSidebar = {
  title: string;
  url: string;
  icon?: React.ReactNode;
  isActive: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export type TUserCreate = {
  username: string;
  email: string;
  name?: string;
  cleckId: string;
  avatar?: string;
};
export { TActiveLinkProps, TMenuSidebar };
