import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/layout';
import { useColorModeValue, Heading, Spacer, List, ListItem, ListIcon, Box, Link } from '@chakra-ui/react';
import { GiOrcHead } from 'react-icons/gi';

const Settings: NextPage = () => {
  const headingColor = useColorModeValue('maroon', 'wheat');
  return (
    <Box w="full" p={4}>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Box p="2">
          <Heading as="h3" size="lg" style={{ color: headingColor }}>
            Funcionalidades Administrador
          </Heading>
        </Box>
        <Spacer />
      </Flex>

      <List spacing={3}>
        <ListItem display={'flex'} alignItems={'center'}>
          <ListIcon as={GiOrcHead} color="green.500" />
          <Link href="/pathfinder/races/new" >
            Añadir Raza
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Settings;
