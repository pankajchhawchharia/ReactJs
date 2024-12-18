import React, {useRef} from 'react';

function InputFocusUseRef () {

    const inputRef = useRef();
    // const inputRef = React.createRef();

    const handleFocus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleFocus}> Focus Input
            </button>
        </div>
    )
}
export default InputFocusUseRef;
