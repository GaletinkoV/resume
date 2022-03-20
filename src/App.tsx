import React from "react";

import ProfilePage from "./pages/profile/ProfilePage";
import ProfileProvider from "./containers/Profile/ProfileProvider";
import ThemeProvider from "./containers/Theme/ThemeProvider";

import { StyledMain, StyledPageContainer } from "./styles/common";

const profileData = require("./config/profile.json");

function App() {
  return (
    <ThemeProvider>
      <ProfileProvider value={profileData}>
        <StyledMain>
          <StyledPageContainer>
            <ProfilePage />
          </StyledPageContainer>
        </StyledMain>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
