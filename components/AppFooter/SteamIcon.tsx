import React from "react";

export function SteamIcon({
  size,
  ...others
}: React.ComponentProps<"svg"> & { size: number }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 500 500"
    width={size}
    height={size}
    {...others}
  ><path 
    fill="currentColor" 
    d="m183 280 41 28 27 41 87-62-94-96"/><circle cx="340" cy="190" r="49"/><g fill="none" stroke="#ebebeb"><circle cx="179" cy="352" r="63" strokeWidth="19"/><path d="m-18 271 195 81" strokeWidth="80" strokeLinecap="round"/><circle  cx="340" cy="190" r="81" strokeWidth="32"/></g></svg>
  );

}
