export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Validasi environment variables di build time (tanpa dep zod agar build tetap ringan).
 * Dipanggil di next.config.ts / instrumentation jika diperlukan.
 * NEXT_PUBLIC_SITE_URL wajib https:// dan tanpa trailing slash.
 */
export function validateEnv(): { success: boolean; error?: string; data?: { NEXT_PUBLIC_SITE_URL: string } } {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

  if (!raw) {
    return { success: false, error: "NEXT_PUBLIC_SITE_URL belum di-set di .env.local" };
  }

  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") {
      return { success: false, error: "NEXT_PUBLIC_SITE_URL harus diawali https://" };
    }
    if (raw.endsWith("/")) {
      return { success: false, error: "NEXT_PUBLIC_SITE_URL jangan diakhiri slash /" };
    }
    return { success: true, data: { NEXT_PUBLIC_SITE_URL: raw } };
  } catch {
    return { success: false, error: "NEXT_PUBLIC_SITE_URL bukan URL valid" };
  }
}
