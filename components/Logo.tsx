export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="44"
      height="20"
      viewBox="0 0 88 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo"
    >
      <circle cx="20" cy="20" r="20" fill="#F77575" />
      <rect
        x="68"
        width="28.2843"
        height="28.2843"
        rx="2"
        transform="rotate(45 68 0)"
        fill="#4ACC2A"
      />
    </svg>
  );
}
