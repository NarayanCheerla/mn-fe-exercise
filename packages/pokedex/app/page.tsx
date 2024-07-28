"use client"
import {Button} from "components";

export default function Home() {
  return (
    <div>
      <Button onClick={() => alert("default button clicked")}>Click Default Button</Button>
      <Button disable onClick={() => alert("disabled button clicked")}>Disabled</Button>
    </div>
  );
}
