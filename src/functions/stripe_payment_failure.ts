import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: PlainObject) {
  ctx.logger.error("Payment failed event received.");
  ctx.logger.error("Event data:", args);

  return new GSStatus(false, 500, "Payment failed. Please check logs.");
}
