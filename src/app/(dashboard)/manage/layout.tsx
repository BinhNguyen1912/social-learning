import React from 'react';
import { auth } from '@clerk/nextjs/server';
import Page from '@/app/(dashboard)/layout';
import PageNotFound from '@/app/not-found';
import { redirect } from 'next/navigation';
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) return redirect('/sign-in');
  return <div>{children}</div>;
}
