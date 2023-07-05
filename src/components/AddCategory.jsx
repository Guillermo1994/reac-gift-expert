import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories((c)=> [inputValue, ...c]);
        onNewCategory(inputValue);
        setInputValue('');
        // console.log(inputValue);
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
         <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={(event) => onInputChange(event)}
        />
    </form>
   
  )
}
