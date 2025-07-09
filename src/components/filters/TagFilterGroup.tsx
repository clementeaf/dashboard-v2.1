import React from 'react';
import { TagFilterItem, TagFilterItemProps } from './TagFilterItem';

export interface TagFilterGroupProps {
  tags: TagFilterItemProps[];
  onChange: (index: number, checked: boolean) => void;
  className?: string;
}

export const TagFilterGroup: React.FC<TagFilterGroupProps> = ({ tags, onChange, className = '' }) => (
  <div className={`flex flex-row flex-wrap gap-3 items-start ${className}`} style={{ justifyContent: 'flex-start' }}>
    {tags.map((tag, idx) => (
      <TagFilterItem
        key={tag.label}
        {...tag}
        onChange={checked => onChange(idx, checked)}
      />
    ))}
  </div>
);

export default TagFilterGroup; 