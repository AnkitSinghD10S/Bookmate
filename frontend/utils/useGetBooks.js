import { useEffect, useState } from "react";

const useGetBooks=()=>{
    const [books,setBooks] = useState([]);
    useEffect( ()=>{
        const getBooks= async ()=>{
            try {
                const res = await fetch("http://localhost:5000/api/book");
                const data = await res.json();
                if(data.error) {
                    throw new Error(data.error)
                }
            setBooks(data)
            } catch (error) {
                console.log(error);
            }
        }
        getBooks()
    },[])
    return {books};
}

export default useGetBooks;