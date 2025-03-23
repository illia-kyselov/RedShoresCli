import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BookSVG = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10.929 3.07C9.233 2.067 6.062.839 2.565.4 1.155.222 0 1.45 0 2.953v14.508c0 1.502 1.16 2.699 2.558 2.967 3.155.606 5.78 2.207 7.454 3.472.28.212.59.372.917.482V3.07Zm2.142 21.312c.326-.11.636-.27.916-.481 1.675-1.265 4.3-2.866 7.455-3.472C22.84 20.16 24 18.963 24 17.46V2.954C24 1.45 22.845.222 21.435.399c-3.497.439-6.668 1.667-8.364 2.672v21.31Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BookSVG;
