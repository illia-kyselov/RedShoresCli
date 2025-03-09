import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MoodSVG = ({ fill, width = 25, height = 24, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <Path
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m4.833 13.5-.485.121a2 2 0 0 0-1.515 1.94v1.877a2 2 0 0 0 1.515 1.94l1.74.436a.6.6 0 0 0 .745-.583v-5.463a.6.6 0 0 0-.745-.582l-1.255.314Zm0 0V13c0-4.97 3.582-9 8-9 4.419 0 8 4.03 8 9v.5m0 0 .485.121a2 2 0 0 1 1.515 1.94v1.877a2 2 0 0 1-1.515 1.94l-1.74.436a.6.6 0 0 1-.745-.583v-5.463a.6.6 0 0 1 .746-.582l1.254.314Z"
        />
    </Svg>
);

export default MoodSVG;
