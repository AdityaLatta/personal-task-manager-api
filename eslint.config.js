import globals from "globals";
import airbnbBase from "eslint-config-airbnb-base";
import pluginImport from "eslint-plugin-import";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: globals.node,
        },
        plugins: {
            import: pluginImport,
        },
        rules: {
            ...airbnbBase.rules,
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];
