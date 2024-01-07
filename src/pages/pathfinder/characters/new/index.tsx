import type { NextPage } from 'next'
import { Flex,Text } from '@chakra-ui/layout';
import { Box, Spinner } from '@chakra-ui/react'
import { useAuth } from 'contexts/AuthUserContext';
import { SoroLogo } from '@/utils/soro-logo';
import { useEffect } from 'react';

const NewCharacter: NextPage = () => {
    const { loading: loadingAuth, authUser } = useAuth()

    useEffect(() => {
        if (authUser) {
            console.log(authUser.uid)
        }
    }, [authUser]);

    return (
        <Flex
            align="center"
            justify="center"
        >
            {loadingAuth && <Spinner />}
            <Text>{authUser?.uid}</Text>
            <SoroLogo size={50} />
        </Flex>

    )
}

export default NewCharacter;
