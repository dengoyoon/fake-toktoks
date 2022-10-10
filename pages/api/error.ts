import type { NextApiRequest, NextApiResponse } from "next"
import { withSentry } from "@sentry/nextjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  throw new Error("API throw error test")
  res.status(200).json({ name: "Error Doe" });
};

export default withSentry(handler);