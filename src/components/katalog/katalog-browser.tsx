"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ProdukGrid } from "@/components/katalog/produk-card";
import type { MerekView, ProdukView } from "@/lib/katalog-view";

type Props = { produk: ProdukView[]; merek: MerekView[] };

function Tab({ aktif, onClick, children }: { aktif: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={aktif}
      onClick={onClick}
      className={`-mb-px inline-flex min-h-11 items-center border-b-2 px-1 font-display text-base font-semibold transition-colors ${
        aktif ? "border-primary text-ink" : "border-transparent text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function SubChip({ aktif, onClick, children }: { aktif: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={aktif}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center rounded-control px-3 font-display text-sm font-semibold transition-colors ${
        aktif ? "bg-primary-tint text-primary" : "text-ink-muted hover:bg-panel hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Isi({ produk, merek, awalMerek, awalSeri }: Props & { awalMerek: string; awalSeri: string }) {
  const merekAwalValid = merek.find((m) => m.slug === awalMerek);
  const [mSlug, setM] = useState(merekAwalValid ? awalMerek : "");
  const [sSlug, setS] = useState(merekAwalValid?.seri.some((s) => s.slug === awalSeri) ? awalSeri : "");

  const aktifMerek = merek.find((m) => m.slug === mSlug);
  const tampil = produk.filter((p) => (!mSlug || p.merek?.slug === mSlug) && (!sSlug || p.seri?.slug === sSlug));

  const pilih = (m: string, s = "") => {
    setM(m);
    setS(s);
    const q = new URLSearchParams();
    if (m) q.set("merek", m);
    if (s) q.set("seri", s);
    const qs = q.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };

  return (
    <div>
      {merek.length > 0 ? (
        <div className="mb-8">
          <div role="group" aria-label="Filter merek" className="flex flex-wrap gap-x-6 border-b border-line">
            <Tab aktif={!mSlug} onClick={() => pilih("")}>
              Semua
            </Tab>
            {merek.map((m) => (
              <Tab key={m.slug} aktif={mSlug === m.slug} onClick={() => pilih(m.slug)}>
                {m.nama}
              </Tab>
            ))}
          </div>
          {aktifMerek && aktifMerek.seri.length > 0 ? (
            <div role="group" aria-label={`Filter seri ${aktifMerek.nama}`} className="mt-3 flex flex-wrap gap-1">
              <SubChip aktif={!sSlug} onClick={() => pilih(aktifMerek.slug)}>
                Semua seri
              </SubChip>
              {aktifMerek.seri.map((s) => (
                <SubChip key={s.slug} aktif={sSlug === s.slug} onClick={() => pilih(aktifMerek.slug, s.slug)}>
                  {s.nama}
                </SubChip>
              ))}
            </div>
          ) : null}
          {aktifMerek?.ringkasan ? <p className="mt-4 max-w-2xl text-ink-muted">{aktifMerek.ringkasan}</p> : null}
        </div>
      ) : null}

      <p aria-live="polite" className="mb-5 text-sm text-ink-muted">
        {tampil.length} produk
      </p>

      {tampil.length > 0 ? (
        <ProdukGrid produk={tampil} />
      ) : (
        <div>
          <p>Belum ada produk untuk pilihan ini.</p>
          <button type="button" onClick={() => pilih("")} className="mt-3 text-ink underline underline-offset-4">
            Tampilkan semua produk
          </button>
        </div>
      )}
    </div>
  );
}

// Filter awal dibaca dari alamat (?merek=...&seri=...) supaya tautan dari beranda langsung terfilter.
// Suspense dibutuhkan useSearchParams di halaman statis; fallback-nya memuat semua produk
// sehingga HTML awal tetap lengkap untuk mesin pencari.
function DenganQuery(props: Props) {
  const q = useSearchParams();
  return <Isi {...props} awalMerek={q.get("merek") ?? ""} awalSeri={q.get("seri") ?? ""} />;
}

export function KatalogBrowser(props: Props) {
  return (
    <Suspense fallback={<Isi {...props} awalMerek="" awalSeri="" />}>
      <DenganQuery {...props} />
    </Suspense>
  );
}
