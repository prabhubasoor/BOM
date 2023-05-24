export {};

declare global {
 namespace PlaywrightTest {
    interface Matchers<R, T> {
      isGreaterThan(a: number, errorMessage: string): R;
    }
  }
}