import React, {createContext, useState} from 'react';

const DataContext = createContext();

export function DataProvider ({children}) {
  const [sharedData, setSharedData] = useState("shareData");

return (
  <DataContext.Provider value={{sharedData,setSharedData}}>
{children}
</DataContext.Provider>
);
}

export default DataContext;
