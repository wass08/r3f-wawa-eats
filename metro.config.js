// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

[("js", "jsx", "json", "ts", "tsx", "cjs", "mjs")].forEach((ext) => {
  if (config.resolver.sourceExts.indexOf(ext) === -1) {
    config.resolver.sourceExts.push(ext);
  }
});

["glb", "gltf", "png", "jpg"].forEach((ext) => {
  if (config.resolver.assetExts.indexOf(ext) === -1) {
    config.resolver.assetExts.push(ext);
  }
});

module.exports = config;
