import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    const formSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const query = form.elements.query.value;
        if (form.elements.query.value.trim() === "") {
            toast.error("Please, enter search query")
            return;
        }
        onSubmit(query)
        console.log(query);
        form.reset()
  }

  return (
      <header className={css.header}>
        <div><Toaster position="bottom-center" reverseOrder={false}/></div>
        <form onSubmit={formSubmit} className={css.form}>
            <input className={css.formInpt}
            type="text"
            // autocomplete="off"
            // autofocus
                  placeholder="Search images and photos"
                  name="query"
            />
            <button className={css.formBtn} type="submit">Search</button>
        </form>
    </header>

  )
}

export default SearchBar