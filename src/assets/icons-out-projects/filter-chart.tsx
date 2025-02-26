import * as React from "react";
const FilterChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={43}
    fill="none"
    {...props}
  >
    <rect width={43} height={43} fill="#151A20" rx={7} />
    <path
      fill="#fff"
      d="M13.9 17.7h.271c1.045 0 1.9.855 1.9 1.9v9.5c0 1.045-.855 1.9-1.9 1.9H13.9c-1.045 0-1.9-.855-1.9-1.9v-9.5c0-1.045.855-1.9 1.9-1.9Zm7.6-5.7c1.045 0 1.9.855 1.9 1.9v15.2c0 1.045-.855 1.9-1.9 1.9s-1.9-.855-1.9-1.9V13.9c0-1.045.855-1.9 1.9-1.9Zm7.6 10.857c1.045 0 1.9.855 1.9 1.9V29.1c0 1.045-.855 1.9-1.9 1.9s-1.9-.855-1.9-1.9v-4.343c0-1.045.855-1.9 1.9-1.9Z"
    />
  </svg>
);
export default FilterChart;
