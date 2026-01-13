module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif'],
      },
    ],
  ],
};
