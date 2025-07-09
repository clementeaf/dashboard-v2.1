"use client";
import React, { useState } from 'react';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { ChannelFilterGroup, TagFilterGroup } from '@/components/filters';
import { Globe, MessageCircle, Mail, Facebook, Instagram, Tag } from 'lucide-react';

const initialChannels = [
  { label: 'Web', icon: Globe, color: 'bg-violet-500', checked: true, onChange: () => {}, online: true },
  { label: 'WhatsApp', icon: MessageCircle, color: 'bg-violet-400', checked: true, onChange: () => {}, online: true },
  { label: 'E-mail', icon: Mail, color: 'bg-gray-300', checked: false, onChange: () => {}, disabled: true },
  { label: 'Facebook', icon: Facebook, color: 'bg-gray-300', checked: false, onChange: () => {}, disabled: true },
  { label: 'Instagram', icon: Instagram, color: 'bg-gray-300', checked: false, onChange: () => {}, disabled: true },
];

const initialTags = [
  { label: 'sales-and-support-divya-smartorders', icon: Tag, checked: true, onChange: () => {} },
];

const ConversacionesPage: React.FC = () => {
  const [channels, setChannels] = useState(initialChannels);
  const [tags, setTags] = useState(initialTags);

  const handleChannelChange = (idx: number, checked: boolean) => {
    setChannels(channels => channels.map((c, i) => i === idx ? { ...c, checked } : c));
  };
  const handleTagChange = (idx: number, checked: boolean) => {
    setTags(tags => tags.map((t, i) => i === idx ? { ...t, checked } : t));
  };

  return (
    <SidebarLayout>
      <div className="flex flex-1 flex-col items-center justify-start w-full h-full">
        <div className="w-full max-w-4xl mx-auto p-6 md:p-12 bg-transparent flex flex-col items-center justify-center">
          <div className="w-full mb-6">
            <ChannelFilterGroup channels={channels.map((c, i) => ({ ...c, onChange: (checked) => handleChannelChange(i, checked) }))} onChange={handleChannelChange} />
            <TagFilterGroup tags={tags.map((t, i) => ({ ...t, onChange: (checked) => handleTagChange(i, checked) }))} onChange={handleTagChange} className="mt-2" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">Conversaciones</h1>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default ConversacionesPage; 