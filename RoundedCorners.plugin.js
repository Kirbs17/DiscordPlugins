// RoundedCorners.plugin.js

/**
 * @name Rounded Corners
 * @version 1.0.0
 * @description Applies rounded corners to the BetterDiscord app.
 * @author ĸirbs№17
 * @website https://yourwebsite.com
 * @source https://link-to-your-plugin-source-code
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
      // Inject the custom CSS
      BdApi.injectCSS("rounded-corners-css", css);
    }

    stop() {
      // Remove the injected CSS
      BdApi.clearCSS("rounded-corners-css");
    }
  };
})();

// Register the plugin with BetterDiscord
if (global.ZeresPluginLibrary) {
  global.ZeresPluginLibrary.PluginUpdater.checkForUpdate("RoundedCorners", "1.0.0", "https://link-to-your-plugin-changelog");
}

if (typeof window !== "undefined" && window.BdApi && window.pluginModule) {
  window.BdApi.Plugins.register("RoundedCorners", plugin);
} else {
  console.error("Failed to register plugin: window.BdApi or pluginModule is not defined.");
}