import { useWindowDimensions } from "react-native";

/**
 *
 * @returns {boolean} - get `true` while orientation mode is landscape \
 * based on ratio `screen.width` and `screen.height` get from native hooks `useWindowsDimensions`
 */
export default function useIsLand() {

  const {width, height} = useWindowDimensions();

  // ratio >= 1 is considerate as landscape mode
  return width >= height;
}
