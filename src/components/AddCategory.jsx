import { useState } from "react"
import PropTypes from 'prop-types';

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
        <form onSubmit={onFormSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    );
};

AddCategory.propType = {
    onNewCategoryTap: PropTypes.func.isRequired,
}
