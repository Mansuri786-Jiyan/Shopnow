import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context with default values
export const DataContext = createContext({
  data: [],
  setData: () => {},
  fetchData: () => {}
});

// Context Provider
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      const productData = response.data.products;
      setData(productData); 

      console.log("Data fetched successfully:", response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
   const categories = data.map((item) => item.category);

  useEffect(() => {
    fetchData();
  }, []);
  
  

  return (
    <DataContext.Provider value={{ data, setData, fetchData, categories }}>
      {children}
    </DataContext.Provider>
  );
};
