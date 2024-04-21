import React from 'react';
import {View} from 'react-native';
import Activity from './Activity';
import Dashboard from './Dashboard';
import Nutrition from './Nutrition';
import MentalHealth from './MentalHealth';
import Goal from './Goal';

export default function Data({pag, onChangePage}) {
  let text: String = 'Dashboard';
  if (pag === 'Activity Tracking') {
    text = 'Activity';
  } else if (pag === 'Nutrition Log') {
    text = 'Nutrition';
  } else if (pag === 'Mental health check-ins') {
    text = 'MentalHealth';
  } else if (pag === 'Goal Setting') {
    text = 'Goal';
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: 'white', flex: 1}}>
      {text === 'Dashboard' && <Dashboard onChangePage={onChangePage} />}
      {text === 'Activity' && <Activity />}
      {text === 'Nutrition' && <Nutrition />}
      {text === 'MentalHealth' && <MentalHealth />}
      {text === 'Goal' && <Goal />}
    </View>
  );
}
