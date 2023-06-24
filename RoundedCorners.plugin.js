// RoundedCorners.plugin.js

/**
 * @name Rounded Corners
 * @author ĸirbs№17
 * @authorLink https://github.com/Kirbs17
 * @version 1.0.0
 * @description Applies rounded corners to the BetterDiscord app.
 * @website https://github.com/Kirbs17
 * @source https://github.com/Kirbs17/DiscordPlugins/blob/main/RoundedCorners.plugin.js
 * @updateUrl https://github.com/Kirbs17/DiscordPlugins/blob/main/RoundedCorners.plugin.js
 */

const plugin = (() => {
  const css = `
    .app {
      border-radius: 10px !important;
      overflow: hidden !important;
    }
  `;

  return class RoundedCorners {
    start() {
      BdApi.injectCSS("rounded-corners-css", css);
    }

    stop() {
      BdApi.clearCSS("rounded-corners-css");
    }
  };
})();

if (global.ZeresPluginLibrary) {
  global.ZeresPluginLibrary.PluginUpdater.checkForUpdate("RoundedCorners", "1.0.0", "https://github.com/Kirbs17/DiscordPlugins");
}

if (typeof window !== "undefined" && window.BdApi && window.pluginModule) {
  window.BdApi.Plugins.register("RoundedCorners", plugin);
} else {
  console.error("Failed to register plugin: window.BdApi or pluginModule is not defined.");
}
