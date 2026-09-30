import { Asset } from "@/components/asset";
import type { AssetId } from "@/content/assets";

const langkah: { id: AssetId; judul: string; isi: string }[] = [
  { id: "PROSES-01", judul: "Survei", isi: "Lihat kondisi ruangan dan plafon yang ada, lalu catat kebutuhan." },
  { id: "PROSES-02", judul: "Ukur", isi: "Hitung luas dan kebutuhan panel, lalu kirim estimasi biaya." },
  { id: "PROSES-03", judul: "Pasang", isi: "Pasang rangka dan panel sesuai motif yang dipilih." },
  { id: "PROSES-04", judul: "Rapikan", isi: "Periksa sambungan dan sudut, lalu bersihkan sisa pekerjaan." },
];

export function Steps() {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {langkah.map((l, i) => (
        <li key={l.id}>
          <Asset id={l.id} sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" className="rounded-card" />
          <p className="text-label mt-4 text-accent">Langkah {i + 1}</p>
          <h3 className="text-title mt-1">{l.judul}</h3>
          <p className="mt-2 text-ink-muted">{l.isi}</p>
        </li>
      ))}
    </ol>
  );
}
