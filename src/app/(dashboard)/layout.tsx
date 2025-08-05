// import Sidebar from '@/component/layout/sidebar';
// import { AppSidebar } from '@/components/layout/app-sidebar';

// export default function DashBoardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     /* grid-col-[300px, minmax(0, 1fr)] , cot trai la 300px ,
//         con cot phai la phan con lai va 0, 1fr de khoi tran*/
//     <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)]">
//       <AppSidebar />
//       <div>
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }

import { ModeToggle } from '@/components/common/ModeToggle';
import { AppSidebar } from '@/components/layout/app-sidebar';

import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-16 w-full shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between gap-2 px-4">
            <SidebarTrigger />
            <ModeToggle />
          </div>
        </div>
        <div className="py-2 px-3 ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
