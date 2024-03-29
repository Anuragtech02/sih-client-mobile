import Svg, { Path } from "react-native-svg";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/contexts";

const PeopleIcon = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M12 4.77332C11.96 4.76665 11.9133 4.76665 11.8733 4.77332C10.9533 4.73998 10.22 3.98665 10.22 3.05331C10.22 2.09998 10.9866 1.33331 11.94 1.33331C12.8933 1.33331 13.66 2.10665 13.66 3.05331C13.6533 3.98665 12.92 4.73998 12 4.77332Z"
        stroke={theme.colors.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.3132 9.62663C12.2265 9.77997 13.2332 9.61996 13.9399 9.14663C14.8799 8.51996 14.8799 7.4933 13.9399 6.86663C13.2265 6.3933 12.2065 6.23329 11.2932 6.39329"
        stroke={theme.colors.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.98007 4.77332C4.02007 4.76665 4.06674 4.76665 4.10674 4.77332C5.02674 4.73998 5.76007 3.98665 5.76007 3.05331C5.76007 2.09998 4.9934 1.33331 4.04007 1.33331C3.08674 1.33331 2.32007 2.10665 2.32007 3.05331C2.32674 3.98665 3.06007 4.73998 3.98007 4.77332Z"
        stroke={theme.colors.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.66663 9.62663C3.75329 9.77997 2.74663 9.61996 2.03996 9.14663C1.09996 8.51996 1.09996 7.4933 2.03996 6.86663C2.75329 6.3933 3.77329 6.23329 4.68663 6.39329"
        stroke={theme.colors.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.99997 9.75336C7.95997 9.74669 7.9133 9.74669 7.8733 9.75336C6.9533 9.72002 6.21997 8.96669 6.21997 8.03336C6.21997 7.08002 6.98664 6.31335 7.93997 6.31335C8.8933 6.31335 9.65997 7.08669 9.65997 8.03336C9.6533 8.96669 8.91997 9.72669 7.99997 9.75336Z"
        stroke={theme.colors.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.05998 11.8534C5.11998 12.48 5.11998 13.5067 6.05998 14.1334C7.12665 14.8467 8.87331 14.8467 9.93998 14.1334C10.88 13.5067 10.88 12.48 9.93998 11.8534C8.87998 11.1467 7.12665 11.1467 6.05998 11.8534Z"
        stroke={theme.colors.primary}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PeopleIcon;
