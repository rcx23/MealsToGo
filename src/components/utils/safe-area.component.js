import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Platform } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${Platform.IOS &&
  StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}
`;
