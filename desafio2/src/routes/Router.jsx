import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { Obrogado } from "../pages/PageObrigado/Obrigado";



export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/obrigado" element={<Obrogado />} />
            <Route path="*" element={<p>Loading</p>} />
         </Routes>
      </BrowserRouter>
   );
};
