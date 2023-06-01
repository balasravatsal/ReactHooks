import { useState } from "react";
import { data } from "./../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newPerson = { id: Date.now(), name };
    const newPeople = [...people, newPerson];
    setPeople(newPeople);
    setName("");
  };

  const removeUser = (id) => {
    const newPeople = people.filter((person) => id !== person.id);
    setPeople(newPeople);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}

      <div className="form">
        <h2>Users</h2>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
              <button onClick={() => removeUser(person.id)} className="btn">
                Revome
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
