import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: saddlebrown;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const App: React.FC = () => {
    return <Title>Start here...</Title>;
};
