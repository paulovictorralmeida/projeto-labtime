import React, { useState } from 'react'

const SearchList = ({prop}) => {
    const [valor, setValor] = useState('');

    const handleChange = (event) => {
      setValor(event.target.value);
    };

  return (
    <div className='search_list__container'>
        <form className="search__form">
            <svg width="20" height="20" fill="currentColor" className="search__svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input className="search__input" type="text" aria-label="Digite sua busca" placeholder="Digite sua busca..." value={valor} onChange={handleChange}/>
        </form>
        <button onClick={prop(valor)} className="search__btn">Buscar</button>
    </div>
  )
}

export default SearchList