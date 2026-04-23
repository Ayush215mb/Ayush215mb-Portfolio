import { getLlmsTxtContent } from "@/lib/geo-config";

export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  const content = getLlmsTxtContent();

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
