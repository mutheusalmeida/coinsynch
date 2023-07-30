import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const data = await request.json()

  return new Response(
    JSON.stringify({
      message: `Welcome to CoinSynch, ${data.name}`,
    }),
    {
      status: 200,
    }
  )
}
