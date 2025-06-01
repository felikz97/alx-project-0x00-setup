import React from 'react';
// This is a simple button component that can be reused across the application. 


type ButtonProps = {
  title: string;
  styles?: string;
};

export default function Button({ title, styles = '' }: ButtonProps) {
  return (
    <button className={`px-4 py-2 bg-blue-600 text-white ${styles}`}>
      {title}
    </button>
  );
}
