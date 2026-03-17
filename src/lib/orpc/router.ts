import { baseProcedure } from "./procedures/base"

export const health = baseProcedure
  .handler(async () => {

    // throw new Error("Something went wrong")
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    }
  })

export const router = {
  health,
}