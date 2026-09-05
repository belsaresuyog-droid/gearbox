import type { Metadata } from "next";
import "./globals.css";
import "./actual-calendar.css";
import "./powder-coating.css";
import "./feeder-layout.css";
import "./schedule-collapse.css";
import "./feeder-daily.css";
import "./feeder-collapse.css";
import "./time-wise-plan.css";
import "./vendor-order.css";
import "./tube-product-status.css";
import "./readability.css";

export const metadata: Metadata = {
  title: "LinePilot | CP Pair Production Planning",
  description: "Plan CP pair production by operation cycle time and machine capacity.",
  openGraph: {
    title: "LinePilot | CP Pair Production Planning",
    description: "Production planning for CP pair operations and cycle times.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LinePilot monthly production planning" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
