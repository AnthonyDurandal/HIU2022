import React, { useState } from "react";

const AppContext = React.createContext({
    count: null,
    setCount: null
});

export default AppContext;