import { Stack } from "@chakra-ui/react";
import {
  RiToolsFill,
  RiDashboardLine,
  RiHeart2Line,
  RiCommunityFill,
  RiLinksFill,
  RiMap2Fill
} from "react-icons/ri";
import {
  GiDiceTwentyFacesTwenty,
  GiPerson,
  GiDirectionSign
} from "react-icons/gi";
import { NavButton } from "./NavButton";
import { NavSection } from "./NavSection";
import { useAuth } from "@/contexts/AuthUserContext";
// https://react-icons.github.io/react-icons/icons/gi/
export function SidebarMainNav() {
  const { authUser } = useAuth();

  return (
    <Stack spacing="8">
      <NavSection title="PATHFINDER">
        <NavButton icon={GiPerson} title="Personajes" href="/pathfinder/characters" />
        <NavButton icon={GiDirectionSign} title="Utilidades" href="/pathfinder/utilites" />
      </NavSection>
      {authUser?.uid === 'dE3IicCMypbQNL0ojqIBdDGXdxE3' ? (
        <NavSection title="AJUSTES">
          <NavButton icon={RiToolsFill} title="General" href="/settings" />
          <NavButton icon={RiMap2Fill} title="Roadmap" href="/roadmap" />
        </NavSection>

      ) : (<></>)}
      {/* <NavSection title="PRINCIPAL">
        <NavButton icon={RiDashboardLine} title="Dashboard" href="/dashboard" />
        <NavButton icon={RiHeart2Line} title="Favoritos" href="/favorites" />
      </NavSection>*/}
    </Stack>
  );
}