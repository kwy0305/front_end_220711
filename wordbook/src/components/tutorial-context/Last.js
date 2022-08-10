import { useContext } from "react";
import { GrandContext } from "./GrandFather";

export default function Last() {
  const value = useContext(GrandContext);
  console.log("last", value);
}
