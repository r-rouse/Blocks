import React from 'react';
import { View, Text } from 'react-native';
import DailyCalendar from '../components/calender';

const events = [
    {
      id: 1,
      title: "Morning Meeting",
      description: "Team sync-up to discuss project updates.",
      startTime: "09:00",
      endTime: "09:30",
      location: "Conference Room A"
    },
    {
      id: 2,
      title: "Client Call",
      description: "Conference call with client to discuss requirements.",
      startTime: "10:00",
      endTime: "10:45",
      location: "Online"
    },
    {
      id: 3,
      title: "Lunch Break",
      description: "Lunch with colleagues at the cafeteria.",
      startTime: "12:00",
      endTime: "13:00",
      location: "Cafeteria"
    },
    {
      id: 4,
      title: "Workshop",
      description: "Interactive workshop on user experience design.",
      startTime: "15:00",
      endTime: "16:30",
      location: "Meeting Room B"
    },
    {
      id: 5,
      title: "Gym Time",
      description: "Workout session at the office gym.",
      startTime: "18:00",
      endTime: "19:00",
      location: "Office Gym"
    }
  ];
  
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <DailyCalendar events={events}/>
    </View>
  );
}

export default HomeScreen;
