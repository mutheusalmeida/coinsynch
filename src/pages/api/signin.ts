import type { UserType } from '@/resources/types'
import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ cookies, request }) => {
  const data: UserType = await request.json()
  const usersCookie = cookies.get('users')

  if (usersCookie.value) {
    const users: UserType[] = usersCookie.json()
    const user = users.find(
      (item) => item.email === data.email && item.password === data.password
    )

    if (user) {
      cookies.set('user', user, {
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
    } else {
      return new Response(
        JSON.stringify({
          ok: false,
        }),
        {
          status: 200,
        }
      )
    }
  }

  return new Response(
    JSON.stringify({
      ok: false,
    }),
    {
      status: 200,
    }
  )
}
