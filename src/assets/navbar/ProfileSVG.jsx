import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileSVG = ({ fill, width = 24, height = 24, ...props }) => (
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
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        />
        <Path
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
    </Svg>
);

export default ProfileSVG;
