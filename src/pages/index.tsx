import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/layout';
import { Box, Spinner } from '@chakra-ui/react'
import { useAuth } from 'contexts/AuthUserContext';
import { SoroLogo } from '@/utils/soro-logo';

const Dashboard: NextPage = () => {
  const { loading: loadingAuth } = useAuth()
  return (
    <Flex
      align="center"
      justify="center"
    >
      {loadingAuth && <Spinner />}
      <SoroLogo size={50} />
    </Flex>

  )
}

export default Dashboard;
