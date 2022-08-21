import { useState } from "react"
import { AddCategory } from "./components/AddCategories/AddCategory";

export const GifExpertApp = _ => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <h1>Mostrando los Gift Experts</h1>

      <AddCategory        
        handleAddCategory={event => handleAddCategory(event)}
      />

      <ol>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ol>
    </>
  )
}
