import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PlusSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M32 10a2 2 0 0 1 2 2v18h18a2 2 0 0 1 0 4H34v18a2 2 0 0 1-4 0V34H12a2 2 0 0 1 0-4h18V12a2 2 0 0 1 2-2Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default PlusSVG;
