
import React from 'react';

// Import homepage components
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';

const App = () => {
  return (
    <>
      {/* Website navigation */}
      <Header />

      <main>
        {/* Homepage banner */}
        <Hero />

        {/* Service categories */}
        <Service />
      </main>
    </>
  );
};

export default App;
