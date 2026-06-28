import { createFileRoute } from "@tanstack/react-router";

import startSmart from "@/assets/pdfs/Start-Smart-Site-Consultation-AM-BP-1.pdf.asset.json";
import adviceComparingQuotes2 from "@/assets/pdfs/Advice-when-comparing-quotes-2.pdf.asset.json";
import hiaArticle from "@/assets/pdfs/HIA-Housing-Article-May-2022-3.pdf.asset.json";
import ambpProfile from "@/assets/pdfs/AMBP-Profile.pdf.asset.json";
import ambpRenovation from "@/assets/pdfs/AMBP-Renovation-Discovery-Consultation.pdf.asset.json";
import ambpInterior from "@/assets/pdfs/AMBP-Interior-Design-Service.pdf.asset.json";
import ambpAdvice from "@/assets/pdfs/AMBP-Advice-when-comparing-quotes.pdf.asset.json";
import wpBath from "@/assets/pdfs/AMBP-WELCOME-PACK-BATHROOM-23.pdf.asset.json";
import wpKitchen from "@/assets/pdfs/AMBP-WELCOME-PACK-KITCHEN-23.pdf.asset.json";
import wpInterior from "@/assets/pdfs/AMBP-WELCOME-PACK-INTERIOR-RENOVATION-23.pdf.asset.json";
import studioJenka from "@/assets/pdfs/Studio-Jenka-Profile.pdf.asset.json";
import selectingRenovator from "@/assets/pdfs/Advice-When-Selecting-A-Renovator-AMBP.pdf.asset.json";
import selectingRenovator1 from "@/assets/pdfs/Advice-When-Selecting-A-Renovator-AMBP-1.pdf.asset.json";
import selectingRenovator2 from "@/assets/pdfs/Advice-When-Selecting-A-Renovator-AMBP-2.pdf.asset.json";
import selectingRenovator3 from "@/assets/pdfs/Advice-When-Selecting-A-Renovator-AMBP-3.pdf.asset.json";

const PDFS: Record<string, { url: string }> = {
  "Start-Smart-Site-Consultation-AM-BP-1": startSmart,
  "Advice-when-comparing-quotes-2": adviceComparingQuotes2,
  "HIA-Housing-Article-May-2022-3": hiaArticle,
  "AMBP-Profile": ambpProfile,
  "AMBP-Renovation-Discovery-Consultation": ambpRenovation,
  "AMBP-Interior-Design-Service": ambpInterior,
  "AMBP-Advice-when-comparing-quotes": ambpAdvice,
  "AMBP-WELCOME-PACK-BATHROOM-23": wpBath,
  "AMBP-WELCOME-PACK-KITCHEN-23": wpKitchen,
  "AMBP-WELCOME-PACK-INTERIOR-RENOVATION-23": wpInterior,
  "Studio-Jenka-Profile": studioJenka,
  "Advice-When-Selecting-A-Renovator-AMBP": selectingRenovator,
  "Advice-When-Selecting-A-Renovator-AMBP-1": selectingRenovator1,
  "Advice-When-Selecting-A-Renovator-AMBP-2": selectingRenovator2,
  "Advice-When-Selecting-A-Renovator-AMBP-3": selectingRenovator3,
};

export const Route = createFileRoute("/pdf/$slug")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const pdf = PDFS[params.slug];
        if (!pdf) return new Response("Not found", { status: 404 });

        const assetUrl = new URL(pdf.url, request.url).toString();
        const upstream = await fetch(assetUrl);
        if (!upstream.ok || !upstream.body) {
          return new Response("Not found", { status: 404 });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="${params.slug}.pdf"`,
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
