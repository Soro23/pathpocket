import type { NextPage } from 'next'
import { Flex,Text } from '@chakra-ui/layout';
import { Box, Spinner } from '@chakra-ui/react'
import { useAuth } from 'contexts/AuthUserContext';
import { SoroLogo } from '@/utils/soro-logo';
import { useEffect } from 'react';
import { CharacterData } from "@/components/class/characterdata";
import { TopHeader } from '@/components/ui/organisms/Character/TopHeader';

const NewCharacter: NextPage = () => {
    const { loading: loadingAuth, authUser } = useAuth()
    let newChar = new CharacterData()

    useEffect(() => {
        if (authUser) {
            console.log(authUser.uid)
        }
    }, [authUser]);

    return (
        <Box w="full" h="full" >
            {/* {loadingAuth && <Spinner />} */}
            {/* <Text>{authUser?.uid}</Text> */}
            {/* <SoroLogo size={50} /> */}
            <TopHeader CharData={newChar} editMode={true} />
        </Box>

    )
}

export default NewCharacter;
