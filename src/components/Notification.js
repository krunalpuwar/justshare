import {StyleSheet, View,Button} from 'react-native';
import React, {useEffect,useState} from 'react';
import PushNotification, {Importance} from 'react-native-push-notification';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Notification = props => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'My channel',
        importance: Importance.HIGH,
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  }, []);

  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);

  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* { PushNotification.localNotificationSchedule({
        channelId: 'channel-id',
        title:props.title,
        message: props.message,
        date:date,
        allowWhileIdle: true
      })} */}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
