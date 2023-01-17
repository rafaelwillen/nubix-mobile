import { Ionicons } from '@expo/vector-icons';
import {
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
} from 'native-base';
import React, { FC, useState } from 'react';

import Container from '../../components/layout/Container';
import SignUpStepCount from '../../components/layout/SignUpStepCount';
import { AuthStackScreenProps } from '../../routes/types';
import { androidRippleEffect } from '../../utils/theme/style';

const SignUpStepTwo: FC<AuthStackScreenProps<'SignUpStepTwo'>> = ({
  navigation,
}) => {
  const [isLoading, setLoading] = useState(false);

  async function handleGoNextStep() {
    setLoading(true);
    // Do form submission here
    setLoading(false);
    navigation.navigate('SignUpStepThree');
  }

  return (
    <Container>
      <HStack>
        <IconButton
          borderRadius="full"
          _pressed={{
            bg: 'light.50',
          }}
          icon={<Icon as={<Ionicons name="arrow-back-circle-outline" />} />}
          _icon={{
            color: 'dark.50',
            size: '4xl',
          }}
          onPress={() => navigation.goBack()}
        />
      </HStack>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <SignUpStepCount numberOfSteps={3} currentStepIndex={1} />
        <Heading
          textAlign="center"
          textTransform="uppercase"
          fontFamily="heading"
          fontSize="2xl"
          color="primary.100"
        >
          Criar Conta
        </Heading>

        <Text
          textAlign="center"
          fontFamily="body"
          fontSize="lg"
          color="primary.100"
          mb="6"
        >
          Dados Pessoais
        </Text>

        <Button
          isLoading={isLoading}
          mb="4"
          py="3"
          bg="primary.100"
          borderRadius="lg"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'primary.100',
          }}
          onPress={handleGoNextStep}
        >
          Continuar
        </Button>
      </ScrollView>
    </Container>
  );
};

export default SignUpStepTwo;
