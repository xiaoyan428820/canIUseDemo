import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { TestConsole } from '@/util/util'
import ButtonList from '@/components/buttonList'
import './index.scss'

/**
 * 基础
 * @returns
 */

export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'env',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.canIUseWebp')
          TestConsole.consoleSuccess.call(this, Taro.env, apiIndex)
        },
      },
      {
        id: 'canIUse',
        inputData: {
          apiName: 'openBluetoothAdapter',
        },
        func: (apiIndex, data) => {
          const { apiName } = data
          TestConsole.consoleTest(`Taro.canIUse ${apiName}`)
          TestConsole.consoleSuccess.call(this, Taro.canIUse(apiName), apiIndex)
          TestConsole.consoleDebug('字面量示例1：share-element.rect-tween-type.cubic-bezier(x1,----', Taro.canIUse('share-element.rect-tween-type.cubic-bezier(x1,'))
          TestConsole.consoleDebug('字面量示例2：live-pusher.aspect.9:16----', Taro.canIUse("live-pusher.aspect.9:16"))
          TestConsole.consoleDebug('字面量示例3：live-pusher.audio-reverb-type.4----', Taro.canIUse("live-pusher.audio-reverb-type.4"))
          const apiName1 = 'share-element.rect-tween-type.cubic-bezier(x1,'
          const apiName2 = "live-pusher.aspect.9:16"
          const apiName3 = "live-pusher.audio-reverb-type.4"
          TestConsole.consoleDebug('变量示例1：share-element.rect-tween-type.cubic-bezier(x1,----', Taro.canIUse(apiName1))
          TestConsole.consoleDebug('变量示例2：live-pusher.aspect.9:16----', Taro.canIUse(apiName2))
          TestConsole.consoleDebug('变量示例2：live-pusher..audio-reverb-type.4----', Taro.canIUse(apiName3))
        },
      },
      {
        id: 'canIuseWebp',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.canIUseWebp')
          try {
            const res = Taro.canIUseWebp()
            TestConsole.consoleSuccess.call(this, res, apiIndex)
          } catch (err) {
            TestConsole.consoleFail.call(this, err, apiIndex)
          }
        },
      },
      {
        id: 'base64ToArrayBuffer',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.base64ToArrayBuffer')
          const base64 = 'CxYh'
          const arrayBuffer = Taro.base64ToArrayBuffer(base64)
          TestConsole.consoleNormal('Taro.base64ToArrayBuffer before: ', base64)
          TestConsole.consoleNormal('Taro.base64ToArrayBuffer after: ', arrayBuffer)
          const res = {
            Int8Array: new Int8Array(arrayBuffer),
            Uint8Array: new Uint8Array(arrayBuffer),
            ArrayBufferByteLength: arrayBuffer.byteLength,
          }
          TestConsole.consoleResult.call(this, res, apiIndex)
        },
      },
      {
        id: 'arrayBufferToBase64',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.arrayBufferToBase64')
          const arrayBuffer = new Uint8Array([11, 22, 33])
          const res = Taro.arrayBufferToBase64(arrayBuffer)
          TestConsole.consoleNormal('Taro.arrayBufferToBase64 before: ', arrayBuffer)
          TestConsole.consoleSuccess.call(this, res, apiIndex)
        },
      },
      {
        id: 'perload',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.perload')
          Taro.preload('x', 1)
          TestConsole.consoleNormal('Taro.perload', '向页面 /pages/index/index 传递参数{x,1}')
          Taro.navigateTo({ url: '/pages/index/index' })
        },
      },
    ],
  }
  render() {
    const { list } = this.state
    return (
      <View className='api-page'>
        <ButtonList buttonList={list} />
      </View>
    )
  }
}
