import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { PluginTeste } from 'react-native-plugin-teste'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 15,
  },
})

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>PluginTeste</Text>
      <PluginTeste />
      <PluginTeste initialCount={45} />
      <Text style={styles.subtitle}>create-react-native-plugin</Text>
    </View>
  )
}
