/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from '@/config';
import { CreateUser } from '@/lib/actions/user.action';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Webhook } from 'svix';

const webhookSecret: string = envConfig.WEBHOOK_SECRET;

export async function POST(req: Request) {
  console.log('req', req.headers);

  const svix_id = req.headers.get('svix-id') ?? '';
  const svix_timestamp = req.headers.get('svix-timestamp') ?? '';
  const svix_signature = req.headers.get('svix-signature') ?? '';

  if (!envConfig.WEBHOOK_SECRET) {
    throw new Error('WEBHOOK_SECRET is not set');
  }
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log('Missing headers');
    return new Response('Bad Request', { status: 400 });
  }
  const body = await req.text();

  const sivx = new Webhook(webhookSecret);

  let msg: WebhookEvent;

  try {
    msg = sivx.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;

    console.log('msg', msg);
  } catch (err: any) {
    console.log(err);

    return new Response(err, { status: 400 });
  }

  const eventType = msg.type;

  console.error('POST ~ msg : ', msg);

  if (eventType === 'user.created') {
    const { id, email_addresses, username, image_url } = msg.data;
    const user = await CreateUser({
      cleckId: id!,
      email: email_addresses[0].email_address!,
      username: username!,
      name: username!,
      avatar: image_url!,
    });
    return NextResponse.json(
      {
        message: 'OK',
        user,
      },
      { status: 200 }
    );
  }

  // Rest

  return new Response('OK', { status: 200 });
}
