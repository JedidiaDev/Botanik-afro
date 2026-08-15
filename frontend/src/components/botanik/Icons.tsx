type IconProps = {
  name: "leaf" | "clock" | "arrow-left" | "check" | "heart" | "calendar" | "chart" | "phone" | "mail" | "pin";
  size?: number;
};

export default function Icon({ name, size = 24 }: IconProps) {
  const common = {
    fill: "none",
    height: size,
    viewBox: "0 0 24 24",
    width: size,
  };

  switch (name) {
    case "leaf":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 2C9 6 6 9 6 13a6 6 0 0012 0c0-4-3-7-6-11z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 7v5l3 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M4 12h16M4 12l4-4M4 12l4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "check":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "heart":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common} aria-hidden="true">
          <rect height="16" rx="2" stroke="currentColor" strokeWidth="1.6" width="18" x="3" y="4" />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M20.5 16.5v2a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 013.6 4.7 2 2 0 015.6 2.5h2a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8.6 10.2a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.9 2.3z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
  }
}
