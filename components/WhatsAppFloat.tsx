import { WhatsAppIcon } from "@/components/Icon";
import { contactUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={contactUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar connosco no WhatsApp">
      <WhatsAppIcon size={28} />
    </a>
  );
}
