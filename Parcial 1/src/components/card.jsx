import {useState, useEffect} from "react";


const BookCard = () => {
      const[query, setQuery] = useState("");
     const [books, setBooks] = useState([]);
     const [loading, setLoading] = useState(false);
     const [readingList, setReadingList] = useState([]);
    
}

    const searchBooks = () => {

        setLoading = true;
        useEffect(() => {
        const getData = async () =>{
        const datos = await fetch('https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10').then((response) => response.json());
          console.log(datos);
         }
         getData();
        fetch('https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10').then((res) => res.json()).then((data) => setJoke(data));
    },[])

       return (
        <>
        <div>
            {<p>{title}</p>} 
            {<p>{Autor}</p>}
            {<p>{year}</p>}
            <input placeholder="Agregar a lista" onChange={(event) => setaddList(event.target.value)}></input>
            {<button onClick={handleSignIn}>Agregar a lista</button> };

            <button onClick={() => handleDelete}> Eliminar </button>

            </div>


        </>
        
        


       )
   
}


export default BookCard;