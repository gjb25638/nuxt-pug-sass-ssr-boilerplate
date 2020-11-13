const enUS = require("./en-us.json");
const zhCn = require("./zh-cn.json");
const zhTw = require("./zh-tw.json");

module.exports = {
  locales: ["en-us", "zh-cn", "zh-tw"],
  defaultLocale: "zh-tw",
  vueI18n: {
    fallbackLocale: "en-us",
    messages: {
      "en-us": enUS,
      "zh-cn": zhCn,
      "zh-tw": zhTw
    }
  }
};
