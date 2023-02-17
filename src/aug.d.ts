import type helpers from './helpers'

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $helpers: typeof helpers
  }
}
