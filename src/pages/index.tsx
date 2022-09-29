import type { NextPage } from "next";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "@/styles/index.module.scss";

interface Props {
  name: string;
  contactInfo: string;
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Props>();

  // const onSubmit: SubmitHandler<Props> = (data) => console.log(data);

  function onSubmit(data: Props) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve(data);
      }, 3000);
    });
  }

  return (
    <>
      <div className={styles.homePage}>
        <Box width="80%" maxW={500} p="1.2rem">
          <Box mb={10} textAlign="center">
            <h2>Join a Speed Dating Session</h2>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={!!errors.name && !!errors.contactInfo}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={5}
            >
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: "Enter your name" })}
                />

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </Box>

              <Box>
                <FormLabel htmlFor="contactInfo">Contact</FormLabel>
                <Input
                  type="text"
                  id="contactInfo"
                  placeholder="Phone No, Twitter link etc."
                  {...register("contactInfo", {
                    required: "Enter your contact info",
                  })}
                />
                <FormErrorMessage>
                  {errors.contactInfo && errors.contactInfo.message}
                </FormErrorMessage>
              </Box>

              <Button
                type="submit"
                colorScheme="teal"
                w="90%"
                maxW={600}
                margin="auto"
                isLoading={isSubmitting}
              >
                JOIN SESSION
              </Button>
            </FormControl>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Home;
