import React from 'react';
import { ChannelFilterItem, ChannelFilterItemProps } from './ChannelFilterItem';

export interface ChannelFilterGroupProps {
  channels: ChannelFilterItemProps[];
  onChange: (index: number, checked: boolean) => void;
  className?: string;
}

export const ChannelFilterGroup: React.FC<ChannelFilterGroupProps> = ({ channels, onChange, className = '' }) => (
  <div className={`flex flex-row flex-wrap gap-3 items-start ${className}`} style={{ justifyContent: 'flex-start' }}>
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