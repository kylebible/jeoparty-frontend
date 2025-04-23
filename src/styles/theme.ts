import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./colors";

// Create a custom system with our colors
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        orange: {
          100: { value: colors.orange },
          DEFAULT: { value: colors.orange },
        },
        darkOrange: {
          100: { value: colors.darkOrange },
          DEFAULT: { value: colors.darkOrange },
        },
        yellow: {
          DEFAULT: { value: colors.yellow },
        },
        blue: {
          100: { value: colors.blue },
          DEFAULT: { value: colors.blue },
        },
        darkBlue: {
          100: { value: colors.darkBlue },
          DEFAULT: { value: colors.darkBlue },
        },
        teal: {
          100: { value: colors.teal },
          DEFAULT: { value: colors.teal },
        },
        lightBlue: {
          100: { value: colors.lightBlue },
          DEFAULT: { value: colors.lightBlue },
        },
        // Add semantic color names
        brand: {
          primary: {
            value: colors.orange,
          },
          secondary: {
            value: colors.yellow,
          },
          tertiary: {
            value: colors.teal,
          },
          dark: {
            value: colors.blue,
          },
          light: {
            value: colors.lightBlue,
          },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
