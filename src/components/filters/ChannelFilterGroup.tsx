import React from 'react';
import { ChannelFilterItem, ChannelFilterItemProps } from './ChannelFilterItem';

export interface ChannelFilterGroupProps {
  channels: ChannelFilterItemProps[];
  onChange: (index: number, checked: boolean) => void;
  className?: string;
}

export const ChannelFilterGroup: React.FC<ChannelFilterGroupProps> = ({ channels, onChange, className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {channels.map((channel, idx) => (
      <ChannelFilterItem
        key={channel.label}
        {...channel}
        onChange={checked => onChange(idx, checked)}
      />
    ))}
  </div>
);

export default ChannelFilterGroup; 