import type { NextPage } from "next";
import { Box, Button, Spinner, Flex } from "@chakra-ui/react";
import { trpc } from "@/utils/trpc";

import styles from "@/styles/waiting.module.scss";

interface Props {
  name: string;
  contactInfo: string;
}

const WaitingPage: NextPage = () => {
  return (
    <>
      <div className={styles.waitingPage}>
        <Box
          width="80%"
          maxW={700}
          p="1.2rem"
          textAlign="center"
          //   border="1px solid black"
        >
          <Flex
            // direction="column"
            justify="center"
            gap={10}
          >
            <h2>Waiting for Other Users to Connect With...</h2>{" "}
            <Spinner
              thickness="2px"
              speed="1s"
              emptyColor="gray.200"
              color="teal"
              size="lg"
            />
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default WaitingPage;
