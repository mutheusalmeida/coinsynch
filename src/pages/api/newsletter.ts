import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const data = await request.json()

  return new Response(
    JSON.stringify({
      message: `Thanks for joining us, ${data.email}`,
    }),
    {
      status: 200,
    }
  )
}
