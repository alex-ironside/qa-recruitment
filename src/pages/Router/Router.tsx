import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CustomOutlet } from 'components/Outlet/Outlet';
import { Details } from 'pages/Details/Details';
import { CustomForm } from 'pages/Form/Form';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CustomOutlet />}
        >
          <Route
            path="/"
            element={<Details />}
          />
          <Route
            path="/edit"
            element={<CustomForm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
