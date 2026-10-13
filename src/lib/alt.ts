import type { Proyek } from "@/content/schemas";
import { labelInterior } from "@/lib/interior-label";

// Alt text dibentuk dari data konten, bukan ditulis ulang di tiap komponen,
// sehingga tetap akurat saat data contoh diganti data klien.
// Contoh: "Plafon PVC motif kayu di ruang tamu", "Kamar set multiplek HPL di kamar tidur".
export function altProyek(p: Proyek): string {
  return `${labelInterior[p.interior]} ${p.bahan} di ${p.ruang.toLowerCase()}`;
}
