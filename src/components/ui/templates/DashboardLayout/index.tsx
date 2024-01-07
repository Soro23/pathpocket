import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Header } from "components/ui/organisms/Header";
import { Sidebar } from "components/ui/organisms/Sidebar";
interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const bg = useColorModeValue('gray.50', 'gray.800')
  return (
    <Flex direction="row">
      <Sidebar />
      <Flex direction="column" w="full">
        <Header />
        <Flex id="bb" 
          bgColor={bg}
          minH={"100vh"} 
          direction={'row'}
          justify={'center'}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
