import {Appbar} from 'react-native-paper';

import React from 'react';

export default function Header({onChangePage}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Health Tracking Application" />
      </Appbar.Header>
      <Appbar.Header>
        <Appbar.Action
          icon="view-dashboard"
          onPress={() => {
            onChangePage('Dashboard');
          }}
        />
        <Appbar.Action
          icon="run"
          onPress={() => {
            onChangePage('Activity Tracking');
          }}
        />
        <Appbar.Action
          icon="food-fork-drink"
          onPress={() => {
            onChangePage('Nutrition Log');
          }}
        />
        <Appbar.Action
          icon="hospital-box"
          onPress={() => {
            onChangePage('Mental health check-ins');
          }}
        />
        <Appbar.Action
          icon="timer-outline"
          onPress={() => {
            onChangePage('Goal Setting');
          }}
        />
      </Appbar.Header>
    </>
  );
}

/**
 * 
 * 
 * 
 
 */
