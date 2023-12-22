import type { ReactNode } from 'react';

export type CoreProps = {
  children?: ReactNode;
};

export function Core({ children }: CoreProps) {
  return (
    <div>
      {children}
    </div>
  );
}
