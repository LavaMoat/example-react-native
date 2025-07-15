const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { lockdownSerializer } = require('@lavamoat/react-native-lockdown')

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const config = {
  serializer: lockdownSerializer({ hermesRuntime: true }),
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
