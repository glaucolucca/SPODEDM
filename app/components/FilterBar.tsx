import React from 'react';
import { View, Text, Pressable } from 'react-native';

type Props = {
  value: 'all' | 'pending' | 'done';
  onChange: (v: 'all' | 'pending' | 'done') => void;
};

export default function FilterBar({ value, onChange }: Props) {
  const Btn = ({ label, val }: { label: string; val: Props['value'] }) => (
    <Pressable
      onPress={() => onChange(val)}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: value === val ? '#111' : '#ccc',
        backgroundColor: value === val ? '#eee' : '#fff',
        marginRight: 8,
      }}
    >
      <Text style={{ fontWeight: value === val ? '700' : '400' }}>{label}</Text>
    </Pressable>
  );
  return (
    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
      <Btn label="Todos" val="all" />
      <Btn label="Pendentes" val="pending" />
      <Btn label="Concluídos" val="done" />
    </View>
  );
}

