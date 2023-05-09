export function ContactCard({contact}) {
  return (
    <div key={contact.id}>
        <h1>{contact.email}</h1>
        <p>{contact.name}</p>
        <hr />
    </div>
  )
}