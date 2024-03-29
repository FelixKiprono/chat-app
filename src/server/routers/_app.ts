/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';
// import { postRouter } from './post';
import { msgRouter } from './message';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  msg: msgRouter,
});

export type AppRouter = typeof appRouter;
