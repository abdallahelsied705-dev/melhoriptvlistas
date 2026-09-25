import type { Faq } from "@/content/types";
import { Rich } from "@/components/Rich";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.q} className="faq-item" open={index === 0}>
          <summary><h3>{item.q}</h3></summary>
          <p><Rich text={item.a} /></p>
        </details>
      ))}
    </div>
  );
}
