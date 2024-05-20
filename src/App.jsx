import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ToDoPage from "./pages/ToDoPage.jsx";
export default function App() {
  return (
    <div className="col-12 App">

      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="todo" element={<ToDoPage />} />
            <Route path="*" element={"Page not found 404 Error"} />
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  )
}
