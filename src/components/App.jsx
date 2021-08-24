import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts){

return(

<Card
id={contacts.id}
key={contacts.id} 
name = {contacts.name}
img = {contacts.imgURL}
tel = {contacts.phone}
email = {contacts.email}
/>
)
}

function App() {
  return (

          <div>
          <h1 className="heading">My Mecha</h1>
           {contacts.map(createCard)}


           {/* <Card
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email} 
            />*/

}
         </div> 

     );
}

export default App;
