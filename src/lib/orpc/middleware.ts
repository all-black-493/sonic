// src/lib/orpc/middleware.ts
import { implement } from "@orpc/server";
import { contract } from "./contracts";
import { auth } from "@clerk/nextjs/server";
import * as Sentry from '@sentry/node';

const os = implement(contract);

export const sentryMiddleware = os.middleware(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
});

export const authMiddleware = os.middleware(async ({ next, errors }) => {
  const { userId } = await auth();
  if (!userId) {
    throw errors.UNAUTHORIZED();
  }
  return next({ context: { userId } });
});

export const orgMiddleware = os.middleware(async ({ next, errors }) => {
  const { userId, orgId } = await auth();
  if (!userId) {
    throw errors.UNAUTHORIZED();
  }
  if (!orgId) {
    throw errors.FORBIDDEN({ message: "Organization required" });
  }
  return next({ context: { userId, orgId } });
});