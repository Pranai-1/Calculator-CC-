import React, { useState, useEffect } from 'react';

function Factory(props) {
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div className={`font-bold text-xl text-center overflow-hidden ${showHello ? 'text-blue-600' : ''} transition-transform duration-500 transform ${showHello ? 'translate-x-0' : '-translate-x-full'}`}>
      {showHello && <span className="inline-block">Hello {props.name}</span>}
    </div>
  );
}
const Element = () => <Factory name="Pranai" />;
export default Element;
