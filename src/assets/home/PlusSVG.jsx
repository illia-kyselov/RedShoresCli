import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PlusSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8h4m0 0h4M8 8V4m0 4v4"
        />
    </Svg>
);
export default PlusSVG;
