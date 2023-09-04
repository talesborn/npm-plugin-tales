# react-native-plugin-teste

A plugin for React Native.

## Installation

```
npm i react-native-plugin-teste
```

## Usage

```jsx
import React from 'react'
import { Text } from 'react-native'
import { PluginTeste } from 'react-native-plugin-teste'

export () =>
    <PluginTeste>
        <Text>Hello Plugin</Text>
    </PluginTeste>
```

## Development

### Build

Run a single build with `npm run build` and find the output in `/dist`.

### Tests

Tests configured for React Native can be run with `npm test` or `npm run test:watch` in watch mode.

### Preview App

To test your plugin on a device run the following to create a React Native app using it.

```
npm run app
cd app
npm run ios / npm run android
```

The following command will automatically copy over changes made to the plugin to the app.

```
npm run watch
```
