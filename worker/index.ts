interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>
  }
}

/** Serve the generated component preview through the Sites asset binding. */
export default {
  fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request)
  },
}
