import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './shared/router';
import { Header } from './widgets/header/header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
