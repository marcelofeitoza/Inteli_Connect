import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function LogoConnect(props: any) {
  return (
    <Svg
      width={props.width ? props.width : 251}
      height={props.width ? props.width*36/251 : 36}
      viewBox="0 0 251 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H251V36H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_181_13" transform="scale(.00398 .02778)" />
        </Pattern>
        <Image
          id="image0_181_13"
          width={251}
          height={36}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default LogoConnect;
