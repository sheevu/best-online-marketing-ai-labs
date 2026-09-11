import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      ".playwright-cli/**",
      "public/images/**",
      "worker-configuration.d.ts",
      "*.d.ts",
      "outputs/**",
      "work/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
  // Public routes use native links; no client router is shipped to visitors.
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
]);

export default eslintConfig;
