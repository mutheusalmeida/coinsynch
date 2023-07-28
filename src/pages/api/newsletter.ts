import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const email = data.get('email')

  return new Response(
    JSON.stringify({
      message: `Thanks for joining us, ${email}`,
    }),
    {
      status: 200,
    }
  )
}
