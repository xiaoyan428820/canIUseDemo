import { fromByteArray, toByteArray } from 'base64-js'

export const env = {
  FRAMEWORK: process.env.FRAMEWORK,
  TARO_ENV: process.env.TARO_ENV,
  TARO_PLATFORM: process.env.TARO_PLATFORM,
  TARO_VERSION: process.env.TARO_VERSION,
}

export function arrayBufferToBase64 (arrayBuffer: ArrayBuffer) {
  return fromByteArray(arrayBuffer as Uint8Array)
}

export function base64ToArrayBuffer (base64: string) {
  return toByteArray(base64).buffer
}

export * from './crypto'
export * from './debug/index'
export * from './performance'
export * from './system'
export * from './update/index'
export * from './weapp/app-event'
export * from './weapp/life-cycle'
