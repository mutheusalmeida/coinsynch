import type { APIRoute } from 'astro'

export const post: APIRoute = () => {
  return {
    body: JSON.stringify({
      message: 'This was a POST!',
    }),
  }
}
