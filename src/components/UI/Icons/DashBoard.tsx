import { SVGProps } from 'react';

export const DashBoard = ({ width = '19', height = '18' }: SVGProps<SVGSVGElement>) => {
  // eslint-disable-next-line max-len
  const d = 'M9.556.57c0-.31.211-.57.555-.57 4.295 0 7.778 3.448 7.778 7.7 0 .31-.264.55-.576.55H9.556V.57ZM.11 9.35c0-4.17 3.129-7.62 7.156-8.173.351-.043.622.21.622.528V9.9l5.434 5.38a.518.518 0 0 1-.052.797A8.353 8.353 0 0 1 8.444 17.6c-4.6 0-8.333-3.692-8.333-8.25Zm18.278.55c.32 0 .576.268.535.584a8.214 8.214 0 0 1-2.566 4.892c-.209.165-.535.179-.737-.02L10.111 9.9h8.278Z';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        fill="currentColor"
      />
    </svg>
  );
};
