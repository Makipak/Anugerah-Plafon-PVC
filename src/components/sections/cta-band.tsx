import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ButtonLink } from "@/components/ui/button";

export function CtaBand({ message, location, title = "Konsultasikan kebutuhan dan jadwal survei", description = "Kirim lokasi dan perkiraan luas ruangan lewat WhatsApp.", secondaryHref, secondaryLabel }: {
  message: string;
  location: string;
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section aria-label="Hubungi kami" className="bg-primary-tint py-14">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-heading max-w-xl">{title}</h2>
          <p className="mt-2 text-ink-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton message={message} location={location} label="Chat WhatsApp" />
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
