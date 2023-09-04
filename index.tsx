import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface Props {
  text?: string
}

const styles = StyleSheet.create({
  view: {
    background: 'silver',
    padding: 20,
  },
  text: {
    color: "red",
  },
})

export const PluginTales = ({
  text = 'Texto aleatório, para alterá-lo preencha a propriedade TEXT do componente',
}: Props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
