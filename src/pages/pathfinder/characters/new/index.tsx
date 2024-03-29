import type { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/layout';
import { Box, Spinner } from '@chakra-ui/react';
import { useAuth } from 'contexts/AuthUserContext';
import { SoroLogo } from '@/utils/soro-logo';
import { useEffect, useState } from 'react';
import { CharacterData } from '@/components/class/characterdata';
import { TopHeader } from '@/components/ui/organisms/Character/TopHeader';
import { createCharacter } from "@/services/firebase/database";

import StepRace from './StepRace';
import StepClass from './StepClass';
import StepStats from './StepStats';
import StepDescription from './StepDescription';
import StepSkill from './StepSkill';
import StepEquipment from './StepEquipment';
import { useRouter } from 'next/router';


const NewCharacter: NextPage = () => {
  const { authUser } = useAuth();
  const router = useRouter();
  const { name } = router.query;

  if (!name || name === '') {
    router.push('/pathfinder/characters/');
    return null; // Evitar que se ejecute el resto del componente si no hay un nombre
  }

  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<CharacterData>(() => ({
    ...new CharacterData(),
    name: name as string
  }));

  const handleNext = (stepData: any) => {
    setData((prevData: any) => ({ ...prevData, ...stepData }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = (stepData: any) => {
    setData((prevData: any) => ({ ...prevData, ...stepData }));
    setStep((prevStep) => prevStep - 1);
  };

  const handleComplete = (lastStepData: any) => {
    setData((prevData: any) => ({ ...prevData, ...lastStepData }));
    console.log('Datos finales:', lastStepData);
    if (authUser) {
      createCharacter(authUser.uid, lastStepData, lastStepData.name)
      router.push({
        pathname: "/pathfinder/characters",
      });
    }
  };

  const stepComponents = [
    <StepRace onNext={handleNext} data={data} />,
    <StepClass onNext={handleNext} onPrev={handlePrev} data={data} />,
    <StepStats onNext={handleNext} onPrev={handlePrev} data={data} />,
    <StepSkill onNext={handleNext} onPrev={handlePrev} data={data} />,
    <StepEquipment onNext={handleNext} onPrev={handlePrev} data={data} />,
    <StepDescription onComplete={handleComplete} onPrev={handlePrev} data={data} />,
  ];

  return (
    <Box w="full" p={4}>
      {stepComponents[step - 1]}
    </Box>
  );
};

export default NewCharacter;
