import React from 'react';
import UserCard from './UserCard';

let wrestlers = [ {
    img: "https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg",
    name: "Rick Flare",
    age: "80",
    gender: "Male",
    match: "96",
    bio: "Woooooo",
    }, 
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoN2IGKaLzr4QGavbBenBdzaGTyjju0iGBHQYbQy161HtCnhv&s",
        name: "Macho Man Randy Savage",
        age: "77",
        gender: "Male",
        match: "95",
        bio: "Ohhhh yeaaaaahhhhhh",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoN2IGKaLzr4QGavbBenBdzaGTyjju0iGBHQYbQy161HtCnhv&s",
        name: "Jeff Musselman",
        age: "800",
        gender: "Male",
        match: "47",
        bio: "Pizza!!",
    }
 ]

function UserContainer() {


    return (
        <>
            {wrestlers.map((wrestler, i) => <UserCard {...wrestler} />)}
        </>
        
    )
}

export default UserContainer;