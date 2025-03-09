import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PauseSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            stroke="#fff"
            strokeWidth={2.667}
            d="M8 24.533V7.467a.8.8 0 0 1 .8-.8h3.733a.8.8 0 0 1 .8.8v17.066a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8ZM18.667 24.533V7.467a.8.8 0 0 1 .8-.8H23.2a.8.8 0 0 1 .8.8v17.066a.8.8 0 0 1-.8.8h-3.733a.8.8 0 0 1-.8-.8Z"
        />
    </Svg>
);
export default PauseSVG;
