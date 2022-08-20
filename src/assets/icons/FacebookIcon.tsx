import Svg, { Path } from "react-native-svg";
import React, { useContext } from "react";
import { ISvg } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

const FacebookIcon: React.FC<ISvg> = ({ style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Svg style={style} width="40" height="40" viewBox="0 0 48 47" fill="none">
      <Path
        d="M45.875 0H2.75C1.71289 0 0.875 0.837891 0.875 1.875V45C0.875 46.0371 1.71289 46.875 2.75 46.875H45.875C46.9121 46.875 47.75 46.0371 47.75 45V1.875C47.75 0.837891 46.9121 0 45.875 0ZM40.4609 13.6816H36.7168C33.7812 13.6816 33.2129 15.0762 33.2129 17.127V21.6445H40.2207L39.3066 28.7168H33.2129V46.875H25.9062V28.7227H19.7949V21.6445H25.9062V16.4297C25.9062 10.377 29.6035 7.07812 35.0059 7.07812C37.5957 7.07812 39.8164 7.27148 40.4668 7.35938V13.6816H40.4609Z"
        fill={theme.colors.primary}
      />
    </Svg>
  );
};

export default FacebookIcon;
