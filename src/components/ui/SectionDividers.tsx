export function DarkToLightDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mb-[1px]">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 sm:h-20 md:h-28 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C320,90 420,120 720,120 C1020,120 1120,90 1440,0 L1440,120 L0,120 Z"
          fill="#F4EFE6"
        />
      </svg>
    </div>
  );
}

export function LightToDarkDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mb-[1px]">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 sm:h-20 md:h-28 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C320,30 420,0 720,0 C1020,0 1120,30 1440,120 L1440,0 L0,0 Z"
          fill="#F4EFE6"
        />
      </svg>
    </div>
  );
}
