import React from 'react';
import { getTokenCookie } from '../../utils/cookies';
import jwt_decode from 'jwt-decode';
import MentorOnboardingModal from '../MentorOnboarding/MentorOnboardingModal';
import Directory from '../Directory';

const ViewContainer = () => {
  const { role_id, hasOnboarded } = jwt_decode(getTokenCookie());

  return (
    <>
      {parseInt(role_id) === 0 ? (
        <>
          <MentorOnboardingModal opened={hasOnboarded ? false : true} />
          <div role="main">Mentor Dashboard</div>
        </>
      ) : (
        <Directory />
      )}
    </>
  );
};

export default ViewContainer;
