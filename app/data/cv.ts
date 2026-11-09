import fs from "node:fs";
import path from "node:path";

// PDF menang begitu Binsar menaruhnya di public/; dibaca saat build
export function cvHref() {
  const pdf = path.join(process.cwd(), "public", "CV-Binsar-Damanik.pdf");
  return fs.existsSync(pdf) ? "/CV-Binsar-Damanik.pdf" : "/CV-Binsar-Damanik.docx";
}
