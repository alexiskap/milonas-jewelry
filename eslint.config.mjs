import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "semi": "error",
      "prefer-const": "error",
      "no-unused-expressions": "error",
      "no-const-assign": "error",
      "no-dupe-keys": "error",
      "no-duplicate-imports": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": "error",
      "no-useless-assignment": "error",
      "eqeqeq": "error",
      "no-console": "warn"
    }
  }
];
