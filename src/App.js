import React, { Suspense } from 'react';
import WeatherForecast from './WeatherForecast'


function App() {
  return (
    <>
      <Suspense fallback={(<div>Loading</div>)}>
        <WeatherForecast/>
      </Suspense>
    </>
  );
}

export default App;
