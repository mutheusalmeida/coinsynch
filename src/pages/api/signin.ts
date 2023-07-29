import type { APIRoute } from 'astro'

export const post: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      token: '<token>',
    }),
    {
      status: 200,
    }
  )
}
