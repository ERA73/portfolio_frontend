import { useEffect, useState } from "react"
import { getAllContacts } from "../api/contact.api";
import { ContactCard } from "./ContactCard";

export function ContactList() {
    const [contacts, setContacts] = useState([]); // argument [] avoid errors in the first charge
    useEffect(()=>{
        async function loadContacts(){
            const res = await getAllContacts();
            setContacts(res.data);
        }
        loadContacts();
    }, []);
  return (
    <div>
        {contacts.map(contact => (
            <ContactCard contact = {contact}/>
        ))}
    </div>
  )
}