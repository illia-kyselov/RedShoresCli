import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const QuizSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M16 20.382v2H4c-1.1 0-2-.9-2-2v-13h2v13h12Zm4-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2Zm-5 12h-2v-2h2v2Zm1.8-5.2c-.3.4-.7.7-1.1.9-.2.2-.4.3-.5.5-.2.2-.2.5-.2.8h-2c0-.5.1-.9.3-1.2.2-.3.5-.6 1-.9.3-.2.5-.4.6-.6.2-.2.2-.5.2-.8 0-.3-.1-.6-.3-.8-.2-.2-.4-.3-.8-.3-.3 0-.5.1-.7.2-.2.2-.3.4-.3.7h-1.9c0-.8.2-1.4.8-1.8.7-.3 1.4-.5 2.3-.5.9 0 1.7.2 2.2.7.5.5.8 1.1.8 1.8 0 .5-.2.9-.4 1.3Z"
        />
    </Svg>
);
export default QuizSVG;

