/** Marca: ecrã com três linhas de lista e um ponto «em direto». */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="var(--ink)" />
      <rect x="9" y="12" width="16" height="3" rx="1.5" fill="var(--paper)" />
      <rect x="9" y="18.5" width="22" height="3" rx="1.5" fill="var(--paper)" opacity=".75" />
      <rect x="9" y="25" width="12" height="3" rx="1.5" fill="var(--paper)" opacity=".5" />
      <circle cx="30" cy="13.5" r="3.5" fill="var(--signal)" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-top">Melhor IPTV</span>
        <span className="logo-bottom">Listas<span className="logo-tld">.pt</span></span>
      </span>
    </span>
  );
}
