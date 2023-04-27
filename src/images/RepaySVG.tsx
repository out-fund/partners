import React from "react";

const RepaySVG = (props: any) => {
  // console.log(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 184 80"
      width="184"
      height="80"
    >
      <rect
        width="79"
        height="79"
        x="104.5"
        y="0.5"
        fill="#F2F6FA"
        rx="9.5"
      ></rect>
      <path
        stroke="#003EDB"
        strokeWidth="3"
        d="M104 19h20v14h20v14h20v14h20"
      ></path>
      <rect
        width="79"
        height="79"
        x="104.5"
        y="0.5"
        stroke="#BFD5EE"
        rx="9.5"
      ></rect>
      <g clipPath="url(#a)">
        <rect width="80" height="80" fill="#F2F6FA" rx="10"></rect>
        <path
          stroke={props.line}
          strokeWidth="3"
          d="M-.478 42.04c5.672-4.03 14.112-12.135 22.779-12.135 10.833 0 12.445 7.975 22.714 7.975 10.269 0 17.824-22.34 35.463-22.34"
        ></path>
        <path
          stroke={props.line}
          strokeWidth="3"
          d="M-.478 63.056c9.254-3.862 16-5.678 23.112-5.678 7.754 0 9.784 3.14 19.694 2.776 9.91-.363 23.338-11.609 38.15-11.609"
        ></path>
      </g>
      <rect
        width="79"
        height="79"
        x="0.5"
        y="0.5"
        stroke="#BFD5EE"
        rx="9.5"
      ></rect>
      <defs>
        <clipPath id="a">
          <rect width="80" height="80" fill="#fff" rx="10"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default RepaySVG;
