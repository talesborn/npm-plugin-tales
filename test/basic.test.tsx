import React from 'react'
import { StyleSheet, View } from 'react-native'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { PluginTeste } from 'react-native-plugin-teste'

test('Renders without any options.', () => {
  const rendered = renderer.create(<PluginTeste />)
  const tree = rendered.toJSON() as ReactTestRendererJSON

  expect(tree.type).toEqual('View')
})

test('Renders inside a View with initialCount prop.', () => {
  const styles = StyleSheet.create({
    color: {
      backgroundColor: 'red',
    },
  })

  const rendered = renderer.create(
    <View style={styles.color}>
      <PluginTeste initialCount={45} />
    </View>
  )
  const tree = rendered.toJSON() as ReactTestRendererJSON

  expect(tree.props.style.backgroundColor).toEqual('red')
})
