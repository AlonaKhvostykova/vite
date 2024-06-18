import { uid } from "uid";
import { Book, libraryAction } from "./libraryAction";

interface ILibraryState {books:Book[]}

const initialState = {
    books: [
        { isbn: '1', title: 'Harry Potter', author: 'J.K. Rowling', year: 1997}
    ]
};
//начальное состояние - объект, у кот-го по ключу books лежит массив (положили сразу туда 1 дефолтную книгу)

export default function libraryReducer(state: ILibraryState = initialState, action: libraryAction): ILibraryState {
   switch (action.type) {
    case "library/add":
           return { ...state, books: [...state.books, { isbn: uid(20), ...action.payload }] };
    case "library/edit":
           return {
               ...state,books: state.books.map((book) => book.isbn === action.payload.isbn ? {...action.payload}:book)
            //        if (book.isbn === action.payload.isbn) {
            //            return {...action.payload 
            //         //    title: action.payload.title,
            //         //    author: action.payload.author,
            //         //    year: action.payload.year
            //            }
            //        } return book;
            //    })
           };
       case "library/delete":
           return {...state, books: state.books.filter(book => book.isbn !== action.payload)};
    default:
       return state;
   }
}