// src/App.js
import "./App.css";
import { useState } from "react"; // <-- add
import contacts from "./contacts.json";

function App() {
  const [contact, setContacts] = useState(contacts.slice(0, 5));
  const [restContacts, setRestContacts] = useState(
    contacts.slice(5, contacts.length)
  );

  const addRandom = () => {
    let randomContact =
      restContacts[Math.floor(Math.random() * restContacts.length)];
    restContacts.splice(randomContact, 1);
    setContacts([...contact, randomContact]);
    setRestContacts(restContacts);
  };

  function requestSort(key) {
    let sortedContacts = [...contact];
    if (key === 'popularity') {
      sortedContacts.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
    } else if (key === 'name') {
      sortedContacts.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
    setContacts(sortedContacts);
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contact.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className={"App " + contact}>
      <h1>Iron Contacts</h1>
      <button onClick={addRandom}> Add Random Contact </button>
      <button onClick={() => requestSort("popularity")}>
        Sort by popularity
      </button>
      <button onClick={() => requestSort("name")}> Sort by name </button>
      <div>
        <table>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won an Oscar </th>
            <th> Won an Emmy </th>
            <th> Actions </th>
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
                <td>{contact.wonEmmy ? <p> 🌟 </p> : <p> </p>}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
