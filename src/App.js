import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CommunityPage from './pages/CommunityPage';
import SelectionPage from './pages/SelectionPage';
import DriveRegistration from './pages/DriveRegistration';
import HealthRegistration from './pages/HealthRegistration';
import Login from './pages/Login';
import DrivingQuestionnaire from './pages/DrivingQuestionnaire';
import CalculatingScore from './pages/CalculatingScore';
import Profile from './pages/Profile';
import DriveRecommendation from './pages/DriveRecommendation';
import HealthQuestionnaire from './pages/HealthQuestionnaire';
import HealthRecommendation from './pages/HealthRecommendation';
import CalculatingScore1 from './pages/CalculatingScore1';
import AnimatedCursor from 'react-animated-cursor';
// this is a react app 
const App = () => {
  return (
    <><AnimatedCursor 
    innerSize={8}
    outerSize={30}
    color="256, 256, 256"
    outerAlpha={.2}
    innerScale={0.7}
    outerScale={3}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]} />
    <Routes>
      <Route exact path="/community" element={<CommunityPage />} />
      <Route exact path="/registration/drive" element={<DriveRegistration />} />
      <Route exact path="/registration" element={<SelectionPage />} />
      <Route
        exact
        path="/registration/health"
        element={<HealthRegistration />}
      />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route
        exact
        path="/drive/calculatingScore"
        element={<CalculatingScore />}
      />
      <Route
        exact
        path="/health/calculatingScore"
        element={<CalculatingScore1 />}
      />
      <Route
        exact
        path="/registration/drive/questionnaire"
        element={<DrivingQuestionnaire />}
      />
      <Route
        exact
        path="/registration/health/questionnaire"
        element={<HealthQuestionnaire />}
      />
      <Route
        exact
        path="/drive/recommendations"
        element={<DriveRecommendation />}
      />
      <Route
        exact
        path="/health/recommendations"
        element={<HealthRecommendation/>}
      />
    </Routes>
    </>
  );
};

export default App;