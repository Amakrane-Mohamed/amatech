type BrandLogoProps = {
  variant: 1 | 2 | 3 | 4 | 5;
  name: string;
};

export function BrandLogoMark({ variant, name }: BrandLogoProps) {
  return (
    <span className="brand-logo" aria-label={name}>
      {variant === 1 && <LogoOne />}
      {variant === 2 && <LogoTwo />}
      {variant === 3 && <LogoThree />}
      {variant === 4 && <LogoFour />}
      {variant === 5 && <LogoFive />}
    </span>
  );
}

function LogoOne() {
  return (
    <svg width="168" height="32" viewBox="0 0 168 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M8 16h16M10 12h12M10 20h12" stroke="currentColor" strokeWidth="1.5" />
      <text x="36" y="21" fill="currentColor" fontSize="14" fontWeight="600">
        Logoipsum
      </text>
    </svg>
  );
}

function LogoTwo() {
  return (
    <svg width="132" height="32" viewBox="0 0 132 32" fill="none" aria-hidden>
      <circle cx="10" cy="12" r="4" fill="currentColor" />
      <circle cx="22" cy="12" r="4" fill="currentColor" />
      <circle cx="10" cy="22" r="4" fill="currentColor" />
      <circle cx="22" cy="22" r="4" fill="currentColor" />
      <text x="36" y="21" fill="currentColor" fontSize="14" fontWeight="600">
        Logoipsum
      </text>
    </svg>
  );
}

function LogoThree() {
  return (
    <svg width="128" height="32" viewBox="0 0 128 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 6v20M6 16h20M9.5 9.5l13 13M22.5 9.5l-13 13M9.5 22.5l13-13M22.5 22.5l-13-13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <text x="36" y="21" fill="currentColor" fontSize="14" fontWeight="600">
        Logoipsum
      </text>
    </svg>
  );
}

function LogoFour() {
  return (
    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" aria-hidden>
      <circle cx="14" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="14" r="2.5" fill="currentColor" />
      <text x="30" y="21" fill="currentColor" fontSize="14" fontWeight="600">
        logoipsum
      </text>
    </svg>
  );
}

function LogoFive() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" aria-hidden>
      <path
        d="M16 8l8 4.5v9L16 26l-8-4.5v-9L16 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 13v6" stroke="currentColor" strokeWidth="1.5" />
      <text x="34" y="21" fill="currentColor" fontSize="14" fontWeight="600">
        Logoipsum
      </text>
    </svg>
  );
}
