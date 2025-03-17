"use client";

import { useEffect, useState } from "react";
import { Header } from "./_components/HeaderFooter/Header";
import { Footer } from "./_components/HeaderFooter/Footer/Footer";
import { HeaderImage } from "./_components/mainPage/HeaderImage";
import { Menus } from "./_components/foodListByCategory/Menus";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  const getFoods = async () => {
    try {
      const data = await fetch("http://localhost:4000/food");
      // console.log("data printing", data);
      const jsonData = await data.json();
      setFoods(jsonData.getFoods || []);
      // console.log("jsonData printing", jsonData);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    // console.log("data printing", data);
    const jsonData = await data.json();
    setCategories(jsonData.getCategory || []);
    console.log("jsonData printing", jsonData);
  };

  useEffect(() => {
    getFoods();
    getCategories();
  }, []);
  return (
    <div>
      <Header />
      <HeaderImage />
      <Menus categories={categories} foods={foods} />
      <Footer />
    </div>
  );
}
