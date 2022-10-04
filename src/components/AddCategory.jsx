import { useState } from "react"

export default function AddCategory({onNewCategoryTap}) {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => setinputValue(target.value);

    const onFormSubmit = event => {
        event.preventDefault();
        if(inputValue.length <= 1) {
            return;
        }
        setinputValue('');
        onNewCategoryTap(inputValue.trim());
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                defaultValue={inputValue}
                onChange={onInputChange}
            />
        </form>

    );
};
