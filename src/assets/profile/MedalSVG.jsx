import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MedalSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.667}
            d="M19.03 13.927 24 2.667m-11.579 11.51L6.668 2.667m10.348 10.73L11.78 2.667m7.367 0L17.76 6M8 21.333a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
        />
    </Svg>
);
export default MedalSVG;
