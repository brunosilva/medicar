// package
import React from 'react';
import Image from 'next/image';

// component
import logo from './logo.svg';

// style
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