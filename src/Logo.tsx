import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={101}
      height={101}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50.5 58.309a7.89 7.89 0 100-15.782 7.89 7.89 0 000 15.782z"
        fill="#81D8F7"
      />
      <path
        d="M50.5 68.51a89.593 89.593 0 01-28.027-3.788 35.665 35.665 0 01-11.543-6.18 11.182 11.182 0 01-4.617-8.124c0-5.217 5.731-10.33 15.333-13.676A90.756 90.756 0 0150.5 32.487a90.5 90.5 0 0128.476 4.18 35.904 35.904 0 0111.166 5.889 10.703 10.703 0 014.546 7.862c0 5.422-6.408 10.917-16.729 14.333A90.903 90.903 0 0150.5 68.51zm0-32.248a88.208 88.208 0 00-27.614 4.047c-8.837 3.083-12.799 7.3-12.799 10.1 0 2.928 4.258 7.533 13.607 10.73A85.882 85.882 0 0050.5 64.736a87.11 87.11 0 0026.276-3.567C86.48 57.952 90.9 53.341 90.9 50.418a7.345 7.345 0 00-3.188-4.965 32.176 32.176 0 00-9.977-5.22 86.678 86.678 0 00-27.235-3.97z"
        fill="#81D8F7"
      />
      <path
        d="M32.572 89.773a8.329 8.329 0 01-4.216-1.035c-4.52-2.607-6.086-10.125-4.189-20.115A90.76 90.76 0 0134.9 41.501a90.51 90.51 0 0117.842-22.58 35.908 35.908 0 0110.68-6.732 10.703 10.703 0 019.084 0c4.7 2.709 6.256 11.003 4.063 21.65A90.921 90.921 0 0166.1 59.507a89.591 89.591 0 01-17.283 22.387 35.663 35.663 0 01-11.12 6.91c-1.642.609-3.374.936-5.126.968zm5.596-46.397A88.212 88.212 0 0027.88 69.318c-1.745 9.2-.07 14.733 2.367 16.14 2.525 1.462 8.655.076 16.097-6.425a85.878 85.878 0 0016.498-21.431 87.11 87.11 0 0010.04-24.543c2.064-10.021.28-16.157-2.25-17.615a7.346 7.346 0 00-5.896.28 32.175 32.175 0 00-9.5 6.054A86.685 86.685 0 0038.19 43.395l-.023-.019z"
        fill="#81D8F7"
      />
      <path
        d="M68.418 89.814c-4.277 0-9.709-2.588-15.365-7.452a90.763 90.763 0 01-18.139-22.841 90.508 90.508 0 01-10.649-26.737 35.904 35.904 0 01-.498-12.625 10.703 10.703 0 014.526-7.85c4.693-2.717 12.656.076 20.784 7.291a90.897 90.897 0 0117.012 21.886 89.585 89.585 0 0110.763 26.156 35.666 35.666 0 01.432 13.085 11.18 11.18 0 01-4.716 8.065 8.174 8.174 0 01-4.15 1.022zM38.181 57.621a88.213 88.213 0 0017.334 21.87c7.099 6.106 12.73 7.42 15.15 5.996 2.525-1.468 4.387-7.458 2.468-17.151a85.889 85.889 0 00-10.324-24.97A87.114 87.114 0 0046.571 22.41c-7.651-6.792-13.856-8.31-16.385-6.845a7.344 7.344 0 00-2.698 5.245 32.174 32.174 0 00.483 11.252 86.687 86.687 0 0010.213 25.566l-.003-.007z"
        fill="#81D8F7"
      />
    </svg>
  )
}