//import { db } from "@/app/db/drizzle";

export async function GET() {
//   const res = await db.execute('select 1');
  return Response.json({message: "foo"});
}