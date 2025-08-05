/* eslint-disable @typescript-eslint/no-explicit-any */
import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { CreateUser } from '@/lib/actions/user.action';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error('WEBHOOK_SECRET not set');
  }

  const svix_id = headers().get('svix-id') ?? '';
  const svix_timestamp = headers().get('svix-timestamp') ?? '';
  const svix_signature = headers().get('svix-signature') ?? '';

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Missing Svix headers');
    return new Response('Bad Request', { status: 400 });
  }

  const payload = await req.json();

  const body = JSON.stringify(payload);
  const svix = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = svix.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
    console.log('✅ Webhook verified:', evt);
  } catch (err: any) {
    console.error('❌ Webhook verify failed:', err.message);
    return new Response('Webhook verification failed', { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, username, image_url } = evt.data;

    try {
      const user = await CreateUser({
        cleckId: id,
        email: email_addresses[0].email_address,
        username: username ?? 'user',
        name: username ?? 'user',
        avatar: image_url,
      });

      return NextResponse.json({ message: 'OK', user }, { status: 200 });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('CreateUser failed', { status: 500 });
    }
  }

  return new Response('Event type not handled', { status: 200 });
}
