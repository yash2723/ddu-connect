import React from 'react';
import LandingPage from './LandingPage';
import Articles from './Articles';
import MoreInfo from './MoreInfo';
import PlacementMania from './PlacementMania';

export default function Home() {
  return (
    <div>
        <LandingPage />
        <Articles />
        <MoreInfo />
        <PlacementMania />
    </div>
  )
}
