"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ProdukFoto } from "@/components/katalog/produk-foto";
import { pesanProduk, type ProdukView, type WarnaView } from "@/lib/katalog-view";

function Swatch({ warna }: { warna: WarnaView }) {
  const foto = warna.foto[0];
  return (
    <span
      aria-hidden="true"
      className="relative block size-9 shrink-0 overflow-hidden rounded-control border border-line"
      style={!foto?.src && warna.hex ? { backgroundColor: warna.hex } : undefined}
    >
      {foto?.src ? <Image src={foto.src} alt="" fill sizes="36px" className="object-cover" /> : null}
    </span>
  );
}

function Isi({ produk: p, awalWarna }: { produk: ProdukView; awalWarna: string }) {
  const [wi, setWi] = useState(() => Math.max(0, p.warna.findIndex((w) => w.slug === awalWarna)));
  const [fi, setFi] = useState(0);

  const warna = p.warna[wi] ?? p.warna[0];
  if (!warna) return null;
  // Produk tanpa foto opsional tetap memakai slot placeholder yang sama.
  const daftarFoto = warna.foto.length > 0 ? warna.foto : [{ src: "", alt: p.namaLengkap }];
  const foto = daftarFoto[fi] ?? daftarFoto[0];

  const pilihWarna = (i: number) => {
    setWi(i);
    setFi(0);
    const w = p.warna[i];
    if (w) window.history.replaceState(null, "", `?warna=${w.slug}`);
  };

  const spesifikasi: [string, string][] = [];
  spesifikasi.push(["Kategori", p.kategori.nama]);
  if (p.merek) spesifikasi.push(["Merek", p.merek.nama]);
  if (p.seri) spesifikasi.push(["Seri", p.seri.nama]);
  if (p.kode) spesifikasi.push(["Kode", p.kode]);
  if (p.motif) spesifikasi.push(["Motif", p.motif]);
  if (p.ukuran) spesifikasi.push(["Ukuran", p.ukuran]);
  if (p.tebal) spesifikasi.push(["Tebal", p.tebal]);
  if (!p.ukuran && !p.tebal) spesifikasi.push(["Ukuran", "Tanyakan lewat WhatsApp"]);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
      <div>
        <ProdukFoto
          src={foto?.src}
          alt={foto?.alt ?? p.namaLengkap}
          label={`${p.namaLengkap} | ${warna.nama} | foto ${fi + 1}`}
          sizes="(min-width: 1024px) 600px, 100vw"
          priority
          className="rounded-card"
        />
        {daftarFoto.length > 1 ? (
          <ul aria-label={`Foto warna ${warna.nama}`} className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {daftarFoto.map((f, i) => (
              <li key={`${warna.slug}-${i}`} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setFi(i)}
                  aria-label={`Foto ${i + 1} dari ${daftarFoto.length}`}
                  aria-current={i === fi ? "true" : undefined}
                  className={`relative block size-20 overflow-hidden rounded-control border bg-panel ${i === fi ? "border-primary ring-2 ring-primary" : "border-line hover:border-line-strong"}`}
                >
                  {f.src ? (
                    <Image src={f.src} alt="" fill sizes="80px" className="object-cover" />
                  ) : (
                    <span className="text-label flex size-full items-center justify-center text-ink-muted">{i + 1}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div>
        <dl className="grid grid-cols-[6.5rem_1fr] gap-y-2 border-y border-line py-4">
          {spesifikasi.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-ink-muted">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>

        {p.warna.length > 1 ? (
          <div className="mt-6">
            <p id="judul-warna" className="font-display font-semibold">
              Pilih warna: <span aria-live="polite">{warna.nama}</span>
            </p>
            <div role="group" aria-labelledby="judul-warna" className="mt-3 flex flex-wrap gap-2">
              {p.warna.map((w, i) => (
                <button
                  key={w.slug}
                  type="button"
                  onClick={() => pilihWarna(i)}
                  aria-pressed={i === wi}
                  className={`flex min-h-11 items-center gap-2 rounded-control border p-1.5 pr-3 text-left text-sm font-semibold transition-colors ${i === wi ? "border-primary bg-primary-tint" : "border-line-strong hover:bg-panel"}`}
                >
                  <Swatch warna={w} />
                  {w.nama}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-muted">Tampilan warna di layar bisa sedikit berbeda dari aslinya.</p>
          </div>
        ) : null}

        <div className="mt-8">
          <WhatsAppButton message={pesanProduk(p, warna)} location="produk-detail" label="Tanyakan ketersediaan" />
        </div>
      </div>
    </div>
  );
}

// Warna awal dibaca dari alamat (?warna=...) supaya tautan produk bisa dibagikan sesuai warna terpilih.
// Fallback Suspense menampilkan warna pertama, jadi HTML awal tetap lengkap untuk mesin pencari.
function DenganQuery({ produk }: { produk: ProdukView }) {
  const q = useSearchParams();
  return <Isi produk={produk} awalWarna={q.get("warna") ?? ""} />;
}

export function ProdukDetail({ produk }: { produk: ProdukView }) {
  return (
    <Suspense fallback={<Isi produk={produk} awalWarna="" />}>
      <DenganQuery produk={produk} />
    </Suspense>
  );
}
