import React ,{useContext} from 'react';

const MyContext = React.createContext();

export default function Parent () {
    const contextValue = "Hello from Context";
    return (
        <div>
            <MyContext.Provider value = {contextValue}>
                <ChildUseContext/>
            </MyContext.Provider>
        </div>
    )
}

const ChildUseContext = () => {
    const contextValue = useContext(MyContext);
    return (
        <p>{contextValue}</p>
    )
}
