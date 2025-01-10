import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: PlainObject) {
  ctx.logger.info("Payment succeeded event received.WOOHOO");
  ctx.logger.info("Event data:", args);

  return new GSStatus(true, 200, "Payment processed successfully YIPEE.");
}
