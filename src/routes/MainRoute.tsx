import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  Deposit,
  DepositProvider,
  DepositProviderBank,
  DepositProviderCreditCard,
  Details,
  ExpenseAnalytics,
  IncomeAnalytics,
  NFCPayment,
  Payment,
  QRScanner,
  ReceiveMoney,
  Transfer,
  TransferConfirmation,
  TransferValue,
} from '../views';
import BottomTabRoute from './BottomTabRoute';
import { MainStackParamListType } from './types';
import FindPost from '../views/ATMLocator/FindPost';

const MainStack = createNativeStackNavigator<MainStackParamListType>();

const MainRoute = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeTab" component={BottomTabRoute} />
      <MainStack.Screen name="Deposit" component={Deposit} />
      <MainStack.Screen name="DepositProvider" component={DepositProvider} />
      <MainStack.Screen
        name="DepositProviderBank"
        component={DepositProviderBank}
      />
      <MainStack.Screen
        name="DepositProviderCreditCard"
        component={DepositProviderCreditCard}
      />
      <MainStack.Screen name="Payment" component={Payment} />
      <MainStack.Screen name="Receive" component={ReceiveMoney} />
      <MainStack.Screen name="Transfer" component={Transfer} />
      <MainStack.Screen
        name="TransferConfirmation"
        component={TransferConfirmation}
      />
      <MainStack.Screen name="TransferValue" component={TransferValue} />
      <MainStack.Screen name="NFCPayment" component={NFCPayment} />
      <MainStack.Screen name="AnalyticsExpense" component={ExpenseAnalytics} />
      <MainStack.Screen name="AnalyticsIncome" component={IncomeAnalytics} />
      <MainStack.Screen name="Details" component={Details} />
      <MainStack.Screen name="QRScanner" component={QRScanner} />
      <MainStack.Screen name="FindPost" component={FindPost} />
    </MainStack.Navigator>
  );
};

export default MainRoute;
