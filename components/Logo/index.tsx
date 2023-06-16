import Image from 'next/image';
import React from 'react';
import logo from './logo.svg';
import { ContainerLogo } from './style';

const Logo: React.FC = () => {
  return (
    <ContainerLogo>
      <Image
        src={logo}
        width={180}
        height={50}
        alt="Medicar"
      />
    </ContainerLogo>
  )
}

export default Logo