import { useState } from "react";
import "./App.css";

// ○ Section 1 is the Header,
// ■ This contains Application Name, Student Name and Student ID.
// ■ Use React State Variable to display the information. Do not hard code the

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}
///////////////////////////////////////////
function MyComponent() {
  const [username, setusername] = useState("");

  const handleusername = (e) => {
    setusername(e.target.value);
  };

  const registeruser = () => {
    alert(`$(username)`);
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-3">MyChatApp</h1>
      <div></div>
      <input
        type="text"
        placeholder="Lets chat here..."
        value={username}
        className="w-75 border p-4"
        onChange={handleusername}
      />
      <input
        type="button"
        value="SEND"
        className="p-4 w-25 "
        onClick={registeruser}
      />
    </div>
  );
}
