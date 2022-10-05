import { useState } from "react";
import { GifGrid } from "../src/components";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  
  const onNewCategoryTap = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([...categories, newCategory]);
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategoryTap={onNewCategoryTap} />
      {
        categories.length == 0 && <h5>Introduce una categoria para ver imágenes</h5>
      }
      {
        categories.map(
          (category, i) => 
          <GifGrid key={category} category={category}/>
          )
      }
    </>
  );
}
