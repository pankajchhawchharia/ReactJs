import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const styles = {
    backgroundColor: isHovered ? 'lightblue' : 'lightgrey',
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
        <div style={styles} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>Hover</div>
      </div>
    </div>
  )
}

export default App;
