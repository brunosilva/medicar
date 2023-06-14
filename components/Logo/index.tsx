import Image from 'next/image';
import React from 'react';
import { ContainerLogo } from './style';

const Logo: React.FC = () => {
  return (
    <ContainerLogo>
      <Image
        src="/logo.svg"
        width={300}
        height={50}
        alt="Medicar"
      />
    </ContainerLogo>
  )
}

export default Logo