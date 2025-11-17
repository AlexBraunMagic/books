import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from 'shared/router';
import { PageLoader } from 'shared/ui/loader';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
