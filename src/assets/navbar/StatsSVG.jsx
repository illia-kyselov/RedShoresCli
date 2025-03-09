import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const StatsSVG = ({ fill, width = 25, height = 25, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <Path
            stroke={fill}
            strokeWidth={2}
            d="M9.167 21h6m-6 0v-5m0 5h-5.4a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6h5.4m6 5V9m0 12h5.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6V9m-6 7V9.6a.6.6 0 0 1 .6-.6h5.4"
        />
    </Svg>
);

export default StatsSVG;
