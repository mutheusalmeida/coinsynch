import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ cookies, request }) => {
  const data = await request.json()

  cookies.set('user', data, {
    path: '/',
    expires: new Date(Date.now() + 1 * (60 * 60 * 1000)),
  })

  return new Response(
    JSON.stringify({
      ok: true,
    }),
    {
      status: 200,
    }
  )
}
