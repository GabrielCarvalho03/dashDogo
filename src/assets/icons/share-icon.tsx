import * as React from "react";

const ShareIcon = (props: any) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO3cuW8TQRzF8YlAUCDR0ENEA0iAxFFARUoajmbn5wSaFNCE2DO2qENPARICAQVHDaKijSIB/0S4qYGaFEkemiSWUJRd22vsvHXeR9rKx876u2vt+hjnREREREREpGe1gJm09P5I+e8s4KZFrKbFB8zqJeaIgY1FUYhiQFH4YkBR+GJAUfhiQFH4YqAdpRZRH/T4dhQrH0NRCGNARwpfDCgKXwwoStkYEbc6XmdE3M27feO2wsendfS70+wI1uVFnzUwnnufBsaziBudnkdnXx34iOlu9+xOQXo40qaHsaNVUlbHQR/xpejIaN+3myBrz1l8pPyYCji8bRtc4Sirmz9a7zZIwdugYpSMsrrV9xy9BNkiimKUOlICPud96dRrkHYUH/Bdb1MlXW9hX95tZYJ0ek7pg5UMIgNiCsLFFISLKQgXUxAupiBlYawWcNYibvuI+z7iSccl4NKgg6R1dDWWiPtp7FkLZ9K2uOrCWNbApAV8KvGdxZ1BB0nr6HVcPuKjj6hVLky6+PIBb0qEAHOQf8K8vTaL/a4KLs5ir0V86CMG2IOsLQHvsznscews4HGfMVCJIOtRHjpmtTpO+oCVnRLEB6zUmjjlWFnAy4LB//ER8xbwtCpnWbY+1nmLWCrYrueO0YU57LaA3zmH9tesgSNVvQ6ZbOKoj/iWs75fWYZdjk3RC9TNHs/+aW+tict565tq4ZBjkzVwPm/AgzhFtCEHSduQu8NFnHNsrIGJvAGPyvchlr++CcdGQcgoCBkFIaMgZBSEjIKQURAyCkJGQcgoCBkFIaMgZBSEjIKQURAyCkJGQcgoCBkFIaMgOzzI1RkcyPuBW7ptEOvUjxzIKAgZBSGjIGQUhIyCkFEQMgpCRkHIKAgZBSGjIGQUhIyCkFEQMpUKMux/4Q5bFf+FO9T/qQ+bBVyp1P/Ui2ZySLMgpNkQXEVZA8fSBMw5O9tPypkcEot4kfs+G7HkIxa6muskciwbY10omuvEAp45VlnECYtYLogyasuyr+O4Y+YDHhG8UBjG4gMeOHZplrU029rIx4h4V4kZ5dpzLlrA6xGO8aqCk/pjLAvwPmBxZEIELFoTWeVmJd3MB5z2ES0LuLfdZ06+9zOtNOZW2obtfh1FRERERETEjb6/SBVzyg3xRrsAAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default ShareIcon;
