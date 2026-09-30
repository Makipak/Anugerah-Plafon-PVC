const fmt = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function formatTanggal(iso: string): string {
  return fmt.format(new Date(`${iso}T00:00:00Z`));
}
