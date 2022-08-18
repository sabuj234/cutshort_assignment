import React from "react";

const Myself = ({ fill }) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>person</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Icons"
        stroke="none"
        // stroke-width="1"
        fill="none"
        // fill-rule="evenodd"
      >
        <g id="Rounded" transform="translate(-138.000000, -4102.000000)">
          <g id="Social" transform="translate(100.000000, 4044.000000)">
            <g
              id="-Round-/-Social-/-person"
              transform="translate(34.000000, 54.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  className={fill ? "fill-cta" : "fill-black"}
                  d="M12,12 C14.21,12 16,10.21 16,8 C16,5.79 14.21,4 12,4 C9.79,4 8,5.79 8,8 C8,10.21 9.79,12 12,12 Z M12,14 C9.33,14 4,15.34 4,18 L4,19 C4,19.55 4.45,20 5,20 L19,20 C19.55,20 20,19.55 20,19 L20,18 C20,15.34 14.67,14 12,14 Z"
                  id="🔹-Icon-Color"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Myself;
