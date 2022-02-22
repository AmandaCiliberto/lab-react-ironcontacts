// src/App.js
import "./App.css";
import { useState } from "react"; // <-- add
import contacts from "./contacts.json";

function App() {
  const [contact, setContacts] = useState(contacts.slice(0, 5));
  const [restContacts, setRestContacts] = useState(contacts.slice(5, contacts.length));
 

  const addRandom = () => {
    console.log('contact', contact);
    let randomContact = restContacts[Math.floor(Math.random() * restContacts.length)];
    restContacts.splice(randomContact, 1);
    console.log('randomContact :>> ', randomContact);
      setContacts([...contact, randomContact]);
    console.log('rest contacts :>> ', restContacts);
  }

  return (
    <div className={"App " + contact}>
      <h1>Iron Contacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <div>
        <table>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won an Oscar </th>
            <th> Won an Emmy </th>
          </tr>
          {contact.map(function (contact) {
            return (
              <tr key={contact.id}>
                <td>
                  <img id="face" src={contact.pictureUrl} alt="contact face" />
                </td>
                <td> {contact.name} </td>
                <td> {contact.popularity} </td>
                <td>{contact.wonOscar ? <p> 🏆 </p> : <p> </p>}</td>
                <td>{contact.wonEmmy ? <p> 🏆 </p> : <p> </p>}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
