export default {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'pnpm run typecheck',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `pnpm run lint . ${filenames.join(' ')}`,
};
