import { Text, TextProps } from "@chakra-ui/react";

interface DashboardLogoProps extends TextProps { }

export default function DashboardLogo(props: DashboardLogoProps) {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      {...props}
    >
      Soro
      <Text as='span' ml="1" color="green.500">.</Text>
    </Text>
  );
}