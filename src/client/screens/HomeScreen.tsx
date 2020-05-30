import React from 'react';

function HomeScreen() {
  return (
    <>
      <div>I'm the home component.</div>
      <button type="button" onClick={() => console.log('Hi there.')}>
        Press me.
      </button>
    </>
  );
}

export default { component: HomeScreen };
