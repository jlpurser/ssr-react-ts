import React from 'react';

export default function Home() {
  return (
    <>
      <div>I'm the home component.</div>
      <button type="button" onClick={() => console.log('Hi there.')}>
        Press me.
      </button>
    </>
  );
}
