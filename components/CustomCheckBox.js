import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomCheckBox = ({checked, label, onChange}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  const toggleCheckbox = () => {
    const toValue = checked ? 0 : 1;
    Animated.timing(scaleValue, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    onChange();
  };

  const animatedScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 1],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={toggleCheckbox}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <Animated.View
        style={[
          styles.checkbox,
          {
            transform: [{scale: animatedScale}],
            backgroundColor: checked ? '#00a748' : 'transparent',
          },
        ]}>
        {checked && <MaterialCommunityIcons name="check" size={16} color="white" />}
      </Animated.View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00a748',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 18,
    fontWeight: 500,
    color: '#252525',
    marginLeft: 10,
  },
});

