import { useState } from "react"

export const AddCategory = ({ handleAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        

        handleAddCategory(inputValue);
        setInputValue('');
    }

    return (

        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text"
                placeholder="Buscar Categoría"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
