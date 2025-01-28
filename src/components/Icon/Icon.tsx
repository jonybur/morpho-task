import React from 'react';
import Image from 'next/image';
import alertIcon from './assets/alert_icon.svg';
import arrowIcon from './assets/arrow_icon.svg';
import borrowIcon from './assets/borrow_icon.svg';
import checkIcon from './assets/check.svg';
import infoIcon from './assets/info.svg';
import loadingIcon from './assets/loading_icon.svg';
import morphoIcon from './assets/morpho_icon.svg';
import upRightArrowIcon from './assets/up_right_arrow_icon.svg';

export type IconName =
  | 'alert'
  | 'borrow'
  | 'morpho'
  | 'arrow'
  | 'upRightArrow'
  | 'loading'
  | 'check'
  | 'info';

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
}

const iconMap: Record<IconName, string> = {
  alert: alertIcon,
  loading: loadingIcon,
  borrow: borrowIcon,
  morpho: morphoIcon,
  arrow: arrowIcon,
  upRightArrow: upRightArrowIcon,
  check: checkIcon,
  info: infoIcon,
};

export const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, className }) => {
  return (
    <Image
      src={iconMap[name]}
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
    />
  );
};
