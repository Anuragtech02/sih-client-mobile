import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

type metricsType = {
  screenWidth: number;
  screenHeight: number;
};

const metrics: metricsType = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default metrics;
