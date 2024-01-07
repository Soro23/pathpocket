interface SoroLogoProps {
  size?: number;
}
export function SoroLogo( { size }: SoroLogoProps) {
  const actualSize = size || 0;
    return (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" width={actualSize}>
        <mask
          id="mask0_408_134"
          style={{ maskType: 'alpha' }}
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M90,20 L150,140 L90,110 L30,140 Z"
            fill="url(#paint0_linear_408_134)" />
          <path
            d="M90,55 L110,95 L90,85 L70,95 Z"
            fill="url(#paint1_linear_408_134)" />
  
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_408_134"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_408_134"
            x1="121"
            y1="54"
            x2="150.799"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="black" />
            <stop offset="1" stopColor="black" stopOpacity="0" />
          </linearGradient>
  
        </defs>
      </svg>
      )
  }
  