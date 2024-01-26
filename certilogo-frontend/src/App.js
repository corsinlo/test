import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalStyle, StyledNav, ContentArea } from './styles/globalStyles';
import LandingPage from './components/landingPage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <StyledNav>
        <ul>
          <li><Link to="/landing/1">Landing Page 1</Link></li>
          <li><Link to="/landing/2">Landing Page 2</Link></li>
          <li><Link to="/landing/3">Landing Page 3</Link></li>
        </ul>
      </StyledNav>
      <ContentArea>
        <Routes>
          <Route path="/landing/:id" element={<LandingPage />} />
        </Routes>
      </ContentArea>
    </Router>
  );
};

export default App;

