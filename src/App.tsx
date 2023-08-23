import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Search from "./routes/Home/Search";
import Result from "./routes/Home/Result";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path ="search" element={<Search />} />
          <Route path ="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
