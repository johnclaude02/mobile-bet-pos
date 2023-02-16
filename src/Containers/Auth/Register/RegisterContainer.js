import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import { Brand } from '@/Components';

function RegisterContainer() {
  const { Layout, Fonts } = useTheme();

  const { t } = useTranslation();

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <Text style={Fonts.textCenter}>{t('Gwapo 69 - Register')}</Text>
    </View>
  );
}

export default RegisterContainer;
