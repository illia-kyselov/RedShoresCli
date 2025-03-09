import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PlaySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.467 3.592A.475.475 0 0 0 4.75 4v11c0 .368.4.596.717.408l9.281-5.5a.475.475 0 0 0 0-.817l-9.28-5.5Z"
        />
    </Svg>
);
export default PlaySVG;
