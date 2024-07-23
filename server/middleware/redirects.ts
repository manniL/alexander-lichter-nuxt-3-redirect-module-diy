import type { H3Event } from "h3";

const RULES = [redirectOldPlayerPage];

export default defineEventHandler(async (event) => {
  for (const rule of RULES) {
    const response = await rule(event);
    if (response) {
      return response;
    }
  }
});

/**
 *  // /players/abc%234121
 * // /users/abc-4121
 */
function redirectOldPlayerPage(event: H3Event) {
  const { path } = event;
  if(!path.startsWith('/players')) {
    return
  }

  const newPath = path.replace(/%23/g, '-').replace('/players', '/users')
  if(newPath === path) {
    return
  }

  return sendRedirect(event, newPath, 307)
}
