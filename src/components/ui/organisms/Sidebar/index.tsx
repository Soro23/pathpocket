import {
  Drawer,
  DrawerOverlay,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack
} from '@chakra-ui/react';
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';
import DashboardLogo from '../../atoms/DashboardLogo';
import { SidebarNav } from './SidebarNav';
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { useRouter } from "next/router";


export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const router = useRouter();
  const handleGoHome = () => {
    router.push("/"); // Redirige a la página de personajes después de editar
  };

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <HStack onClick={handleGoHome} >
                <GiDiceTwentyFacesTwenty fontSize="40" />
                <DashboardLogo />
              </HStack>
            </DrawerHeader>
            <DrawerCloseButton size={'lg'} />
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

    );
  }

  return <VStack
    as="aside"
    align={"left"}
    boxShadow='2xl'
    h="100vh"
    px={["2", "4"]}
    minW="200"
    position={"sticky"}
    left={"0"}
    top={"0"}
    zIndex={999}
  >
    <HStack onClick={handleGoHome}>
      <GiDiceTwentyFacesTwenty fontSize="40" />
      <DashboardLogo py="4" />
    </HStack>
    <SidebarNav />
  </VStack>;
}