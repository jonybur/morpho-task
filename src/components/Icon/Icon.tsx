import React from 'react';
import alertIcon from './assets/alert_icon.svg';
import borrowIcon from './assets/borrow_icon.svg';

export type IconName = 'alert' | 'borrow';

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
}

const iconMap: Record<IconName, string> = {
  alert: alertIcon,
  borrow: borrowIcon,
};

export const Icon: React.FC<IconProps> = ({ 
  name, 
  width = 24, 
  height = 24,
  className 
}) => {
  return (
    <img 
      src={iconMap[name]} 
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
    />
  );
}; 