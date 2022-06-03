import React from 'react';

import { Container } from './styles';

interface IScrollProps {
  id: string;
}

export default function Scroll({ id }: IScrollProps) {
  return <Container id={id} />;
}
