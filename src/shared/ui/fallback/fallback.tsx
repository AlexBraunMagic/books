import React, { FC } from 'react';
import { IFallBack } from '../../types';

export const Fallback: FC<IFallBack> = ({ error }: { error: Error }) => {
  const { cause } = error;

  return (
    <div>
      <h2 className='error-title'>Something went wrong</h2>
      <p>{cause as string}</p>
    </div>
  );
};
