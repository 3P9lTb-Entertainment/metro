import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PassengerPage from "./pages/PassengerPage";

function App() {
  return (
      <>
          <main>
              <BrowserRouter>
                  <Routes>
                      <Route path={'/main'} element={<MainPage/>}/>
                      <Route path={'/passenger/:id'} element={<PassengerPage/>}/>
                  </Routes>
              </BrowserRouter>
          </main>
      </>
  );
}

export default App;
