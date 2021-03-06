/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 **/

export default (opts) => {
  return Promise.all([
    
    import(/* webpackMode: "eager" */ 'src-ssr/middlewares/render')
    
  ]).then(async rawMiddlewares => {
    const middlewares = rawMiddlewares
      .map(entry => entry.default)
      // .filter(entry => typeof entry === 'function')

    for (let i = 0; i < middlewares.length; i++) {
      try {
        await middlewares[i](opts)
      }
      catch (err) {
        console.error('[Quasar SSR] middleware error:', err)
        return
      }
    }
  })
}
