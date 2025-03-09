import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeSVG = ({ fill, width = 25, height = 25, ...props }) => (
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
            d="M17.5 21h-10a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03a4 4 0 0 1 1.927 3.42V17a4 4 0 0 1-4 4ZM9.5 17h6"
        />
    </Svg>
);

export default HomeSVG;
