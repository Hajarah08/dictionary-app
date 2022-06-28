import React, { useState} from "react";
import "./Dictionary.css";
import axios from "axios"

export default function Dictionary(){
    let [keyword, setKeyword]= useState("");

    function handleSubmit(response){
console.log(response.data)
    }

    function search(event){
        event.preventDefault()
        

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_us/${keyword}`;
        axios.get(apiUrl).then(handleSubmit);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}