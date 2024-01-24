import type { NextPage } from 'next';
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { GiCheckMark, GiSoundOn } from 'react-icons/gi';

const Utilities: NextPage = () => {
  const headingColor = useColorModeValue('maroon', 'wheat');
  return (
    <Box w="full" p={4}>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Box p="2">
          <Heading as="h3" size="lg" style={{ color: headingColor }}>
            Utilities
          </Heading>
        </Box>
        <Spacer />
      </Flex>

      <List spacing={3}>
        <ListItem>
          <ListIcon as={GiCheckMark} color="green.500" />
          <Link href="https://www.d20pfsrd.com/" isExternal>
            d29pfsrd
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={GiSoundOn} color="green.500" />
          <Link href="https://www.pocketbard.app/" isExternal>
            Pocket Bard
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Utilities;
