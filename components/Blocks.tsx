import type { Block } from "@/content/types";
import { Rich } from "@/components/Rich";
import { Icon } from "@/components/Icon";
import { PricingMatrix } from "@/components/PricingMatrix";
import { CtaBand } from "@/components/CtaBand";
import { ChannelsGrid, DevicesGrid, FactsGrid } from "@/components/Showcase";

/** Id estável para âncoras a partir do texto do título. */
export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const calloutIcon = { info: "info", tip: "spark", warn: "alert" } as const;

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return <p><Rich text={block.text} /></p>;
    case "ul":
      return <ul className="prose-list">{block.items.map((item) => <li key={item}><Rich text={item} /></li>)}</ul>;
    case "ol":
      return <ol className="prose-list">{block.items.map((item) => <li key={item}><Rich text={item} /></li>)}</ol>;
    case "steps":
      return (
        <ol className="steps">
          {block.items.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p><Rich text={step.text} /></p>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="table-wrap" role="region" aria-label={block.caption ?? "Tabela"} tabIndex={0}>
          <table>
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead><tr>{block.head.map((cell, i) => <th key={i} scope="col">{cell}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>{row.map((cell, c) => c === 0 ? <th key={c} scope="row"><Rich text={cell} /></th> : <td key={c}><Rich text={cell} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <aside className={`callout callout-${block.tone}`}>
          <Icon name={calloutIcon[block.tone]} size={22} />
          <div>
            <p className="callout-title">{block.title}</p>
            <p><Rich text={block.text} /></p>
          </div>
        </aside>
      );
    case "cta":
      return <CtaBand kind={block.kind} />;
    case "pricing":
      return <PricingMatrix />;
    case "channels":
      return <ChannelsGrid />;
    case "devices":
      return <DevicesGrid />;
    case "facts":
      return <FactsGrid />;
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((block, index) => <BlockView key={index} block={block} />)}</>;
}
