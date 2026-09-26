/** Monograma M com sinal de transmissão em direto. */
export function LogoMark({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs><linearGradient id="logo-brand" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#263f5b" /><stop offset="1" stopColor="#101827" /></linearGradient></defs>
      <rect x="1" y="1" width="62" height="62" rx="17" fill="url(#logo-brand)" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="16.5" fill="none" stroke="#fff" strokeOpacity=".18" />
      <path d="M13 46V20c0-1.1.9-2 2-2h5l12 15 12-15h5c1.1 0 2 .9 2 2v26h-8V31L32 45 21 31v15h-8Z" fill="#fff9f1" />
      <circle cx="51" cy="12" r="5" fill="#f26a50" stroke="#17253a" strokeWidth="2" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-top">Melhor IPTV</span>
        <span className="logo-bottom">LISTAS<span className="logo-tld">.PT</span></span>
      </span>
    </span>
  );
}
