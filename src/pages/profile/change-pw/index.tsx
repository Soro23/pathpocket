import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/ui/atoms/Input";
import { Stack, Box } from "@chakra-ui/layout";
import { useColorModeValue, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useAuth } from "contexts/AuthUserContext";

type ProfileFormData = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const formSchema = yup.object().shape({
  oldPassword: yup.string().required("Campo obligatorio"),
  newPassword: yup.string().required("Campo obligatorio"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "La contraseña no coincide").required("Campo obligatorio"),
});

const ChangePassword: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<ProfileFormData>({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;
  const { updateCurrentUserPassword } = useAuth();
  const cardBg = useColorModeValue('white', 'gray.700')

  const toast = useToast();

  const handleUpdatePassword = async (
    values: ProfileFormData
  ) => {
    try {
      await updateCurrentUserPassword(values.oldPassword, values.newPassword);
      toast({
        title: "Sucesso",
        description: "Contraseña actualizada",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (err) {
      toast({
        title: "Erro",
        description: "No se puede actualizar",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Stack w="full" align="center" justify="start" mt="6">
      <Box
        as="form"
        onSubmit={handleSubmit(handleUpdatePassword)}
        w="100%"
        p="8"
        maxW="500"
        boxShadow='xs' rounded='md'
        bgColor={cardBg}
      >
        <Input
          label="Contraseña antigua"
          maxW={600}
          type="password"
          error={errors.oldPassword}
          {...register("oldPassword")}
        />
        <Input
          label="Nueva contraseña"
          maxW={600}
          type="password"
          error={errors.newPassword}
          {...register("newPassword")}
        />
        <Input
          label="Confirmar nueva contraseña"
          maxW={600}
          type="password"
          error={errors.confirmNewPassword}
          {...register("confirmNewPassword")}
        />

        <Button
          type="submit"
          mt="6"
          colorScheme="green"
          size="lg"
          isLoading={formState.isSubmitting}
          w="100%"
        >
          Guardar
        </Button>
      </Box>
    </Stack>
  );
};

export default ChangePassword;
