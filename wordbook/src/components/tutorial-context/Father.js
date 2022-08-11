import { useContext } from "react";
import { GrandContext } from "./GrandFather";

function Father() {
  const value = useContext(GrandContext);
}
