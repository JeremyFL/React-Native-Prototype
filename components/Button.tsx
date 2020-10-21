import React from 'react';
import {
  TouchableHighlight,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import color from 'color';
import theme from '../config/theme';

interface IProps {
  label: string;
  varient?: 'primary' | 'secondary';
  mode?: 'text' | 'outlined' | 'contained';
  disabled?: true | false;
  isLoading?: true | false;
  containerStyle?: object;
  innerStyle?: object;
  onPress?: () => any;
}

const Button = ({
  label,
  varient,
  mode,
  onPress,
  isLoading,
  disabled,
  containerStyle,
  innerStyle,
}: IProps) => {
  const { colors } = theme;

  let backgroundColor;
  let borderColor;
  let textColor;
  let borderWidth;
  let underlay;
  switch (mode) {
    case 'contained':
      backgroundColor = colors.primary;
      textColor = colors.text;
      underlay = color(colors.primary).alpha(0.8).string();
      break;
    case 'outlined':
      borderColor = colors.primary;
      borderWidth = 1;
      backgroundColor = color(colors.primary).alpha(0.1).string();
      textColor = colors.primary;
      underlay = color(colors.primary).alpha(0.2).string();
      break;
    case 'text':
      underlay = color('#000').alpha(0.1).string();
      break;
    default:
  }

  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
  };

  const labelStyle = {
    color: textColor,
  };

  return (
    <TouchableHighlight
      disabled={isLoading}
      onPress={onPress}
      underlayColor={underlay}
      style={[styles.button, buttonStyle]}
    >
      <View style={[styles.innerContainer, innerStyle]}>
        {isLoading && (
          <ActivityIndicator
            color={mode === 'contained' ? colors.text : colors.primary}
            style={[styles.activityIndicator]}
            size="small"
          />
        )}
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginRight: 8,
  },
  button: {
    borderRadius: 8,
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  compactLabel: {
    marginHorizontal: 8,
  },
  innerContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icon: {},
  left: {},
  right: {},
});

Button.defaultProps = {
  varient: 'primary',
  mode: 'text',
  isLoading: false,
  disabled: false,
  containerStyle: {},
  innerStyle: {},
  onPress: () => null,
};

export default Button;
