export default defineNuxtConfig({  
  // /old -> /new
  routeRules: {
    '/old': {
      redirect: {
        to: '/new',
        statusCode: 301
      }
    },
    // wildcard redirect
    // /old-wildcard/a/b/c -> /new-wildcard/a/b/c
    '/old-wildcard/**': {
      redirect: '/new-wildcard/**'
    }
  },

  // General stuff
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },
})