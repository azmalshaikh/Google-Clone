import { useState, useEffect } from 'react'
import API_KEY from "./Keys";

// Search Engine ID
const CONTEXT_KEY = "c5f6c66c6f2fec89c";

// All the below is custom hook

// Pass the term in useGoogleSearch
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
  
// Whenever term changes fire the below code
// Term is data layer variable
  useEffect(() => {
    const fetchData = async() => {
        fetch(
            // URl that connect to google search api 
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        // When you get back response, change the response to response.json
        .then(result => {
            setData(result)
        })
        // Set the data to result
    }

    fetchData();
  }, [term])
// Return an object
  return { data }
};

export default useGoogleSearch
