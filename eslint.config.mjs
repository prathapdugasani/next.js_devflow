// eslint.config.js
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

export default [
  // 🚫 Ignore folders
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
      "dist/**",
    ],
  },

  // ✅ Include base configs directly (no "extends")
  js.configs.recommended,
  prettierConfig,

  // 🧩 Your project config
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        React: true,
        JSX: true,
      },
    },

    // ✅ Register all plugins here (including @next/next)
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@next/next": nextPlugin,
    },

    rules: {
      // --- 🧱 Standard-like rules ---
      semi: ["error", "never"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "no-unused-vars": "warn",
      "comma-dangle": ["error", "always-multiline"],
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-console": "off",

      // --- 🪶 TypeScript rules ---
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/explicit-function-return-type": "off",

      // --- 💡 Next.js rules ---
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
