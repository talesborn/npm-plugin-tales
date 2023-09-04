import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { PluginTeste } from 'react-native-plugin-teste'

test('README example renders correctly.', () => {
  const tree = renderer.create(
    <View>
      <PluginTeste />
    </View>
  )

  expect(tree).toBeDefined()
})
