import { sql } from 'drizzle-orm';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';
import {
  CounterValidation,
} from '@/validations/CounterValidation';

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
  // The default value is 0 when there is no `x-e2e-random-id` header
  const id = Number(headers().get('x-e2e-random-id')) ?? 0;

  try {
    const count = await db
      .insert(counterSchema)
      .values({ id, count: parse.data.increment })
      .onConflictDoUpdate({
        target: counterSchema.id,
        set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
      }).returning();

    logger.info('Counter has been incremented');

    return NextResponse.json({
      count: count[0]?.count,
    });
  } catch (error) {
    logger.error(error, 'An error occurred while incrementing the counter');

    return NextResponse.json({}, { status: 500 });
  }
};
