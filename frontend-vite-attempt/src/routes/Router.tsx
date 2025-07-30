import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { Example } from "../pages/Example";
import Code from "../pages/Code";
import { URLs } from "../urls";
import PageWrapper from "../components/PageWrapper";

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={
            <PageWrapper>
              <App />
            </PageWrapper>
          }
          path="/"
        />
        <Route
          element={
            <PageWrapper>
              <Code />
            </PageWrapper>
          }
          path={URLs.code}
        />
        <Route
          element={
            <PageWrapper>
              <Example />
            </PageWrapper>
          }
          path="/examples"
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
