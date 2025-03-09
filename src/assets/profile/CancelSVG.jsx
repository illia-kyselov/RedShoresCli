import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CancelSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M18 3.375C9.922 3.375 3.375 9.922 3.375 18S9.922 32.625 18 32.625 32.625 26.078 32.625 18 26.078 3.375 18 3.375ZM15.42 13.83a1.126 1.126 0 1 0-1.59 1.59L16.41 18l-2.58 2.58a1.126 1.126 0 1 0 1.59 1.59L18 19.59l2.58 2.58a1.126 1.126 0 1 0 1.59-1.59L19.59 18l2.58-2.58a1.126 1.126 0 1 0-1.59-1.59L18 16.41l-2.58-2.58Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default CancelSVG;
