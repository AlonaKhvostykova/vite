/*
1. add book
2. delete book
3. edit book

*/

// export type Book = {
//   isbn?: string; // (unique)
//   title: string;
//   year: number;
//   author: string;
// };

// export type libraryAction =
//   | { type: "library/add"; payload: Book } //тут payload: Book - что за книгу добавляем
//   | { type: "library/edit"; payload: Book } //тут payload: Book - что за книгу изменяем (по серийнику) и какие поля
//   | { type: "library/delete"; payload: string }; //тут используем не всю книгу, а только серийник


  
export type Book = {
  isbn: string; // (unique)
  title: string;
  year: number;
  author: string;
};

export type libraryAction =
  | { type: "library/add"; payload: Omit<Book, "isbn"> } //Omit такая обертка, кот-я может создать нов. тайп, опираясь на Book, не используя св-во "isbn"
  | { type: "library/edit"; payload: Book }
  | { type: "library/delete"; payload: string }; 


