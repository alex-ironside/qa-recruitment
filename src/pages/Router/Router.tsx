import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CustomOutlet } from 'components/Outlet/Outlet';
import { Details } from 'pages/Details/Details';
import { DetailsForm } from 'pages/Form/Details/Details';
import { OverviewForm } from 'pages/Form/Overview/Overview';

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
          >
            <Route
              path="details"
              element={<DetailsForm />}
            />
            <Route
              path="overview"
              element={<OverviewForm />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
