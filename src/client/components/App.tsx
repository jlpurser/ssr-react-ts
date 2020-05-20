import React from 'react';

export default function App() {
  return (
    <>
      <div>I'm the home component.</div>
      <button type="button" onClick={() => console.log('Hi there.')}>
        Press me.
      </button>
    </>
  );
}
