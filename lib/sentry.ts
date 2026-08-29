// Stub untuk Sentry error tracking (Phase 5 task 50)
// Pakai: npm i @sentry/nextjs lalu uncomment di instrumentation.ts + next.config.ts
export function captureException(_err: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.error("[sentry-stub]", _err);
  }
}
