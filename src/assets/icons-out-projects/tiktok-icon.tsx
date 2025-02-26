import * as React from "react";

const TiktokIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path fill="url(#pattern0_1_37)" d="M0 0h20v20H0z"></path>
    <defs>
      <pattern
        id="pattern0_1_37"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_1_37" transform="scale(.01)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_1_37"
        width="100"
        height="100"
      ></image>
    </defs>
  </svg>
);

export default TiktokIcon;
