import React from 'react';

import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">

      {isLoading ? (
        <p />
      ) : (
          <>
            <TrendingPanel />
            <TrendingPanel />
          </>
        )}

    </Container>
  );
};

export default RightColumn;
