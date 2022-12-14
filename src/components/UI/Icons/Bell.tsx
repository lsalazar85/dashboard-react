import { SVGProps } from 'react';

export const Bell = ({ width = '27', height = '29' }: SVGProps<SVGSVGElement>) => {
  // eslint-disable-next-line max-len
  const d = 'M14.857 1.813V2.9c4.237.84 7.429 4.497 7.429 8.881v1.065c0 2.668 1.004 5.234 2.815 7.227l.43.47c.487.539.609 1.298.307 1.949a1.863 1.863 0 0 1-1.695 1.07H1.857a1.86 1.86 0 0 1-1.694-1.07c-.3-.651-.18-1.41.306-1.948l.43-.47a10.73 10.73 0 0 0 2.816-7.228v-1.065c0-4.384 3.14-8.041 7.428-8.881V1.813C11.143.812 11.973 0 13 0c1.027 0 1.857.812 1.857 1.813ZM13 29c-.986 0-1.932-.38-2.629-1.06a3.671 3.671 0 0 1-1.085-2.565h7.429c0 .912-.39 1.886-1.086 2.566C14.933 28.62 13.935 29 13 29Z';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 29"
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
