import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ThankYouPage } from "../pages/ThankYouPage/ThankYouPage";



export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/ThankYouPage" element={<ThankYouPage />} />
            <Route path="*" element={<p>Loading</p>} />
         </Routes>
      </BrowserRouter>
   );
};
