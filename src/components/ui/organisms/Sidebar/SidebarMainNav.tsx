import { Stack } from "@chakra-ui/react";
import {
  RiToolsFill,
  RiDashboardLine,
  RiHeart2Line,
  RiCommunityFill,
  RiLinksFill
} from "react-icons/ri";
import { 
  GiDiceTwentyFacesTwenty,
  GiPerson,
  GiDirectionSign
} from "react-icons/gi";
import { NavButton } from "./NavButton";
import { NavSection } from "./NavSection";
// https://react-icons.github.io/react-icons/icons/gi/
export function SidebarMainNav() {
  return (
    <Stack spacing="8">
      <NavSection title="PATHFINDER">
        <NavButton icon={GiPerson} title="Personajes" href="/pathfinder/characters" />
        <NavButton icon={GiDirectionSign} title="Utilidades" href="/pathfinder/utilites" />
      </NavSection>
      {/* <NavSection title="PRINCIPAL">
        <NavButton icon={RiDashboardLine} title="Dashboard" href="/dashboard" />
        <NavButton icon={RiHeart2Line} title="Favoritos" href="/favorites" />
      </NavSection>
      <NavSection title="AJUSTES">
        <NavButton icon={RiToolsFill} title="General" href="/settings" />
      </NavSection> */}
    </Stack>
  );
}