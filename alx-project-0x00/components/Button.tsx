// components/Button.tsx
import { ComponentProps } from '@/interfaces'

type ButtonProps = ComponentProps & {
  title: string;
};

export default function Button({ title, styles }: ButtonProps) {
  return (
    <button className={`px-4 py-2 bg-blue-600 text-white ${styles}`}>
      {title}
    </button>
  );
}
