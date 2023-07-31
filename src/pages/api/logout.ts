import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ cookies }) => {
  try {
    cookies.delete('user', {
      path: '/',
    })

    return new Response(
      JSON.stringify({
        ok: true,
      }),
      {
        status: 200,
      }
    )
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({
        ok: false,
      }),
      {
        status: 500,
      }
    )
  }
}
