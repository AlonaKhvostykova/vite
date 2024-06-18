
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { FormEvent, useState } from "react";
import { addBook } from "../redux_rtk/librarySlice";
import { RootState } from "../redux_rtk/storeRTK";


const Library = () => {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  

  const books = useSelector((state: RootState) => state.library.books);
  const dispatch = useDispatch();

  const handleSubmit = (e:FormEvent) => {
    // e:FormEvent типизируем событие
    e.preventDefault();
    //e.preventDefault(); отключи превентивно дефолтное поведение

    dispatch(addBook({ title, author, year }));
    // dispatch({ type: "library/add", payload: { title, author, year } });
    //{ title, author, year } тут 3 пары ключ значение с одинак. названием, поєтому не задваиваем, по ключу тайтл лежит лок.состояние тайтл
    setTitle(''), setAuthor(''), setYear(0);
  }

  return (
    <div>
      <h1>Manage your book collection</h1>
      <h2>Add a new book</h2>

      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Title:
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          {" "}
          Author:
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <label>
          {" "}
          Year:
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(+e.target.value)}
          />
        </label>

        <button>Add Book</button>
        {/* <button onClick={handleAddBook}>Add Book</button> */}
      </form>

      <h2>Book List:</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.isbn} info={book} />
        ))}
      </ul>
    </div>
  );
};

export default Library;

