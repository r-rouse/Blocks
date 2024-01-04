import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const EventDetailsModal = ({ event, isVisible, onClose }) => (
  <Modal
    visible={isVisible}
    onRequestClose={onClose}
    animationType="slide"
    transparent={true}>
    <View style={{ marginTop: 50, padding: 20, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{event.title}</Text>
      <Text>Description: {event.description}</Text>
      <Text>Time: {event.startTime} - {event.endTime}</Text>
      <Text>Location: {event.location}</Text>
      <TouchableOpacity onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);
const HourRow = ({ hour, events, openEvent }) => (
  <View style={{ flexDirection: 'row', height: 60 }}>
    <Text style={{ width: 50 }}>{`${hour}:00`}</Text>
    <View style={{ flex: 1 }}>
        <TouchableOpacity key={events.id} onPress={() => openEvent(events)}>
          <Text>{events.title}</Text>
        </TouchableOpacity>
    </View>
  </View>
);

const DailyCalendar = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openEvent = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeEventDetails = () => {
    setModalVisible(false);
  };

  return (
    <View>
      {/* Assuming 'events' is organized by hours */}
      {events.map((events, index) => (
        <HourRow key={index} hour={index + 1} events={events} openEvent={openEvent} />
      ))}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          isVisible={modalVisible}
          onClose={closeEventDetails}
        />
      )}
    </View>
  );
};



export default DailyCalendar;

