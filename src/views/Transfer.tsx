import { Center, Text } from 'native-base';
import React from 'react';

import ContactsSearch from '../components/ContactsSearch';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';

export default function Transfer() {
  return (
    <Container>
      <Header heading="Transfer" />

      <Center my={8}>
        <Text
          fontFamily="body"
          fontWeight="medium"
          color="_primary.500"
          fontSize="2xl"
          mb={6}
        >
          Total Balance
        </Text>
        <Text
          fontFamily="body"
          color="_primary.500"
          fontWeight="bold"
          fontSize="xl"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          $ 188,290.90
        </Text>
      </Center>

      <ContactsSearch />
    </Container>
  );
}
