import React from "react";
import BookData from '../enkeldata.json';

const BookDisplay = ()=>{
    return(
        <div>
            <div>
            <h1>Mina böcker</h1>
            {BookData.böcker.map((bok)=>(
                <div key={bok.id}> 
                    <h2>{bok.title} </h2>
                    <p>Författare: {bok.författare}</p>
                    <p>Utgivningsår: {bok.utgivningsår}</p>
                    <p>Genre: {bok.genre}</p>
                </div>
            
                ))}
             </div>

        </div>
    );
};

export default BookDisplay