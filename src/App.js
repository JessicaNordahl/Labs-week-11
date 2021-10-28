import React, { useState } from "react";

import CookieAlert from "./components/CookieAlert";

export const App = () => {
  return (
    <div>
      <CookieAlert
        backgroundColor="black"
        position="absolute"
        margin="0"
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        lineHeight="16,41px"
        fontSize="14px" 
        textColor="white" 
        cookieText="We use cookies to provide you with a better service and for promotional purposes. By continuing to use this site you consent to our use of cookies as described in our cookie policy"

      />
    </div>
  );
};
