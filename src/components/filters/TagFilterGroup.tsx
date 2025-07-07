import React from 'react';
import { TagFilterItem, TagFilterItemProps } from './TagFilterItem';

export interface TagFilterGroupProps {
  tags: TagFilterItemProps[];
  onChange: (index: number, checked: boolean) => void;
  className?: string;
}

export const TagFilterGroup: React.FC<TagFilterGroupProps> = ({ tags, onChange, className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
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