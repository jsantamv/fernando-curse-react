import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = _ => {

  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <h1>Mostrando los Gift Experts</h1>

      <AddCategory
        handleAddCategory={event => handleAddCategory(event)}
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }

    </>
  )
}
