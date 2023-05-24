import { expect, defineConfig } from '@playwright/test';

 expect.extend({
  isGreaterThan( actual: number, expected: number, errorMessage: string) {
    const fail = actual > expected; 
    if (fail) {
      return {
        message: () => errorMessage,
        pass: false,
      };
    } else {
      return {
        message: () => 'Pass.',
        pass: true,
      };
    }
  },
});

export default  defineConfig({});
