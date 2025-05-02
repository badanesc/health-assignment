// import { NextRequest } from "next/server";
import { MOCK_PRESCRIPTIONS } from "@/data/prescriptions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const GET = async () => {
  console.log("\n\nFetching prescriptions ...");

  await delay(400);

  console.log("prescriptions fetched");
  return Response.json({ prescriptions: MOCK_PRESCRIPTIONS });
};
