import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import ProductListingCuisines from "../pages/ProductListingCuisines";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductListingCuisines />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AllRoutes as Routes };
