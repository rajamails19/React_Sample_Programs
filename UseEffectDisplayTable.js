import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/books")
      .then((resp) => resp.json())
      .then((data) => setShow(data));
  }, []);

  console.log(show);

  return (
    <>
      <div className="App">
        <table border={1}>
          <tr>
            <th>name</th>
            <th>authors</th>
            <th>numberOfPages</th>
          </tr>
          {show?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.authors}</td>
              <td>{user.numberOfPages}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
