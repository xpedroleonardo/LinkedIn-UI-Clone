import React from 'react';

import { Container } from './styles';

import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';
import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">

      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
          <>
            <ProfilePanel />
            <HashtagPanel />
          </>
        )}

    </Container >
  );
};

export default LeftColumn;
