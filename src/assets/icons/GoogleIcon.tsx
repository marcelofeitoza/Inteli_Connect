import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function GoogleIcon(props: any) {
  return (
    <Svg
      width={props.width ? props.width : 547}
      height={props.width ? props.width : 547}
      viewBox="0 0 547 547"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_183_2)" fill="#3B82F6">
        <Path d="M405.977 273.5a132.39 132.39 0 01-109.604 130.498 132.389 132.389 0 01-147.355-85.612l-75.773 60.618a226.387 226.387 0 00378.649 34.115A226.383 226.383 0 00499.992 273.5" />
        <Path d="M405.977 273.5a132.292 132.292 0 01-55.582 107.668l74.911 59.929A225.713 225.713 0 00499.992 273.5M141.023 273.5a131.602 131.602 0 017.995-44.886l-75.773-60.618a225.242 225.242 0 000 211.008l75.773-60.618a131.602 131.602 0 01-7.995-44.886zM273.5 141.023a131.606 131.606 0 0177.913 25.569l69.401-64.773a225.901 225.901 0 00-282.05-10.377 225.893 225.893 0 00-65.519 76.554l75.773 60.617a132.576 132.576 0 01124.482-87.59z" />
        <Path d="M499.992 256.406V273.5l-38.461 59.828H282.047v-94.016h200.851a17.095 17.095 0 0117.094 17.094z" />
      </G>
      <Defs>
        <ClipPath id="clip0_183_2">
          <Path fill="#fff" d="M0 0H547V547H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default GoogleIcon;
