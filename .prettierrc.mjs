import * as prettierPluginAstro from "prettier-plugin-astro";

export default {
  plugins: [prettierPluginAstro],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
