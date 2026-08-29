import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = `${business.name} — ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          backgroundColor: "#F5F1E8",
        }}
      >
        <div style={{ display: "flex", fontSize: 14, letterSpacing: "0.2em", color: "#5D4037" }}>
          Setiap hari · 08.00–20.00 WIB
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 60, fontWeight: 800, color: "#2A1711" }}>
          {business.name}
        </div>
        <div style={{ display: "flex", marginTop: 6, fontSize: 32, fontWeight: 700, fontStyle: "italic", color: "#5D4037" }}>
          {business.tagline}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 20, gap: 4 }}>
          <div style={{ display: "flex", fontSize: 18, color: "#3A231A" }}>
            Dimsum · Singkong Keju · Pisang Coklat Lumer · Cilok &amp; Cireng · Saus Mentai
          </div>
          <div style={{ display: "flex", fontSize: 18, color: "#3A231A" }}>
            Ambil di toko Pati atau pesan antar {business.serviceArea}
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 28, gap: 12 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#5D4037",
              color: "#F5F1E8",
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            WhatsApp {business.whatsappDisplay}
          </div>
          <div
            style={{
              display: "flex",
              border: "2px solid #5D4037",
              color: "#5D4037",
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            {business.addressShort}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
