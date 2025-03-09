import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowDownSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            stroke="#F1F1F1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m4 6 4 4 4-4"
        />
    </Svg>
);
export default ArrowDownSVG;
