// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
type Data = {
  name: string
}

import type { NextApiRequest, NextApiResponse } from "next"
import { withSentry } from "@sentry/nextjs";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "Front Doe" });
};

export default withSentry(handler);