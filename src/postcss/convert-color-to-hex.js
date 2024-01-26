const Color = require("color");

module.exports = (opt = {}) => {
  return {
    postcssPlugin: "convertColorToHex",
    Declaration(decl) {
      const colorRegex = /(^color)|(^background-color)|(^border-color)/;
      if (colorRegex.test(decl.prop)) {
        try {
          const color = Color(decl.value);
          // 颜色值转换
          const hex = color.hex();
          decl.value = hex;
        } catch (err) {
          console.error(
            `[convertColorToHex] Error processing ${decl.prop}: ${err.message}`
          );
        }
      }
    },
  };
};

module.exports.postcss = true;
