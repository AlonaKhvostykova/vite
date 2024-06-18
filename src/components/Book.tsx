import { FC, useState } from "react";
import { Book as BookType } from "../redux_rtk/librarySlice";
import { useDispatch } from "react-redux";
import { deleteBook, editBook } from "../redux_rtk/librarySlice";

const Book: FC<{ info: BookType }> = ({ info }) => {
    const [isEdit, setIsEdit] = useState(false);

    const [title, setTitle] = useState<string>(info.title);
    const [author, setAuthor] = useState<string>(info.author);
    const [year, setYear] = useState<number>(info.year);
    
    const dispatch = useDispatch();

    const handleEditBook = () => { setIsEdit(true) };
 
    const handleSaveBook = () => {
      dispatch(editBook({ isbn: info.isbn, title, author, year }));
   // dispatch({type: "library/edit", payload: { isbn: info.isbn, title, author, year }, });

      setIsEdit(false);
    };


    
    return isEdit ? (
      <li>
        <label> Title:
          <input
            type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label> Author:
          <input
            type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <label>Year:
          <input
            type="number" placeholder="Year" value={year} onChange={(e) => setYear(+e.target.value)}
          />
        </label>

        <button onClick={handleSaveBook}>Save book</button>
      </li>
    ) : (
      <li>
                {info.title} by {info.author} ({info.year})
                
                <button onClick={handleEditBook}>Edit book</button>

          <button onClick={() => dispatch(deleteBook(info.isbn))}>
          
        {/* <button onClick={() => dispatch({ type: "library/edit", payload: info.isbn})}> */}
          Delete book
        </button>
        {/* <button onClick={handleEdit}>Edit book</button>
            <button onClick={handleDelete}>Delete book</button> */}
      </li>
    );
}

export default Book

