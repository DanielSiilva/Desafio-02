
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";


export function GlobalState(props) {
   
   const [cartProducts, setCartProducts] = useState([
      {
         id: "",
         quantity: "",
      },
   ]);

   
   const GlobalStates = {
     
      cartProducts,
   };

   const GlobalSetStates = {
      setCartProducts,
   };

   
   const Provider = GlobalContext.Provider;

   return (
      <Provider value={{ GlobalStates, GlobalSetStates}}>
         {props.children}
      </Provider>
   );
}
