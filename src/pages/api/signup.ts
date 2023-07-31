import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.json()
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    cookies.set('users', JSON.stringify([newUser]), { path: '/' })

    return new Response(
      JSON.stringify({
        ok: true,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
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
