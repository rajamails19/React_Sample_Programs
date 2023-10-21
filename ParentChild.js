import "./styles.css";
import { Child } from "./Child";

export default function Parent() {
  return (
    <div>
      <Child gender="boy" name="Raja" ></Child>
      <Child gender="girl" name="Sheel" ></Child>
      <Child gender="boy" name="Shrey" ></Child>
      <Child gender="girl" name="Shlok" ></Child>
    </div>
  );
}

export function Child(props) {
    return (
      <div>
        <h1>
          Hello, this is a {props.gender}
          and name is : {props.name}
        </h1>
        <br />
      </div>
    );
  }