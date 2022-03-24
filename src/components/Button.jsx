import React from 'react';
import '../styles/components/Button.scss';

export default function Button({
  content,
  icon = '',
  text = 'whiteText',
  color = 'blue',
}) {
  return (
    <button className={`${color} ${text}`}>
      {content} {icon}
    </button>
  );
}
