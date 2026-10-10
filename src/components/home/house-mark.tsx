/** Decorative original line illustration, not a depiction of the actual building or the official logo. */
export function HouseMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 130"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 51 60 13l48 38M22 46v69h76V46M48 115V75h24v40M33 56h12v15H33zM76 56h12v15H76zM11 115h98M82 31V16h11v24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 42c-9-10-18 6 5 17 23-11 14-27 5-17l-5 5-5-5Z"
        fill="currentColor"
      />
      <path
        d="m8 26 4-7m-1 62-8-3m109 0 6-3M20 8l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
