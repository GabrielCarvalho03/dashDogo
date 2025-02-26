import * as React from "react";
const CalendarIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h17v17H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE4ElEQVR4nO2dS4gcVRSGK6ASsxGNDxRdKBpFs/L9QhSRoEYMwkjQRTvT9/9vFe3CiQs3xlExgvgAURdB3Ypogoo6iNFExICSRUDUhS4iRkQNmjE+ghJtOUwtxvLWdE13VfeZ2+eDsxm6Tp17vr7V1d1DnyQZASRXOecuaLVaKxNltFqtlVKb1JiMA977S0n+SLIL4FtZfKKENE3XSk15bT8AuCSJHZLvy4IXxLZECQC2L6wNwHtJ7ADYVxCyN1ECyb0FIfuS2DEhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhQ2BmZuYo59zlAO4G8CzJV0jOktwRiMOFd+qHSh63YwRxqFDb4ZLHzeZrfEbWTPIy6UEyakQCyRdJzhUWMo5xEMALImfoIkheDGCXgiZ0lcZOkhc2LmJiYuIYkk+RPKJg0V3lcQTAk9KzRmS02+1TAHyiYKHdZRYfp2l6cq0ysiw7g+RXi5z09/xFznnvz+90OquTyOl0OqvzbxYdgFcB/FHWHwBfOudOr+3EJL8oOdlvALbU/gxYhkgPSD4qPSmR8nm73T5h0POsIPlGyQn2OOfW1LOceHDOnUlyd0nP3pae9p08v8cOJd7e2ItVBOQ3P6+VXFXSQbbg/95fAHid5NG1ryJOKW8G+vczyROXnJDkYwG7+7MsO76RFUQIyeNIfh2QsmWpiVYB+CUg5LrGqo8UktcH+jg3PT19bOUkzrk7A0l2Nlp5xJD8ILBLNlZOAODlQIIbG606YkjeHOjnS0tJ8H3h4F/trqp/pHfSw4KU7yodPDk5eVLA5rvyYm6R9d2D/GP7//S10ica+Ufqo/78pzsOIf/nXEXIulEXyjEJ7/0NPYV4728ddaEck5Be9xRCcsOoC+X4xIa+hMi3gwC2WmCQHuyqTYhz7q6eBxqLIj00IYowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIcowIbEIcc6tD/xelh9K1REjPQz87NX6ngd6768NCHlwKFVHDMmHAjvkmioHnhcQsnUoVUcMyecDO2RN1V/1/6tw8KdDqTpiSH5W6OmfladMhGZNee/PabzqSGm322cHLle7Kycg+Uggwf2NVh0xAB4I9PPhyglksFcgwcFxGPZVNzK8JTQYJ03TtUtKBOCjgJSna684cjA/irbYxw+XnMh7f1Mg0T/OudsbqTxCAGyUngXurtb1lZDkOyUzC6+ovfrIAHBlaLZhPqmtP7IsO6tk9JFMUb6j1hVEhJufUFScii0xJ2P1BkpOciK07fK/yZudU2tbyTJnamrqtHx6drekX7fVciKS9y7yg/Iy2fJxmSA90NDE5csKWTvJJ/LLeVmfNtV6VgDTJTtl4fXxm3wy6HMkN5O8L9LYnK9R1rq/R0/+JnlP0gQy7yIfjFhagAUX9uAnkrckTSKTo2X0qjWevZ5822qbEF0FkleTnM23pO0Mzl+e5LbWe39VMiryWeubpBCSB8ZQzgGSb8lr7FB3RFVkZrh8p+KcuyjmSNP03Drmoxf5F3GcpJ7Hb6btAAAAAElFTkSuQmCC"
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default CalendarIcon;
