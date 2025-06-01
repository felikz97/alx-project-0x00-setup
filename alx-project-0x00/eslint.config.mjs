// eslint.config.mjs
import next from '@next/eslint-plugin-next'

export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      next,
    },
    rules: {
      ...next.configs.recommended.rules,
    },
  },
]
