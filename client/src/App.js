import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <>
          <main>
              <BrowserRouter>
                  <Routes>
                      <Route path={'/main'} element={<MainPage/>}/>
                  </Routes>
              </BrowserRouter>
          </main>
      </>
  );
}

export default App;
