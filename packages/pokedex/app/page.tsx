"use client"
import {Button} from "components";
import {ConvertAsHeading} from "utils";

export default function Home() {
  return (
    <div>
      <h1>{ConvertAsHeading("text-weight-super")}</h1>
      <Button onClick={() => alert("default button clicked")}>Click Default Button</Button>
      <Button disable onClick={() => alert("disabled button clicked")}>Disabled</Button>
    </div>
  );
}
