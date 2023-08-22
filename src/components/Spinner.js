import React, { Component } from "react";
import loader from "./loader.gif";

export default function Spinner() {

  return (
    <div className="text-center">
      <img src={loader} alt="Loading" />
    </div>
  )
}
// export default class Spinner extends Component {
//   render() {
   
//   }
// }
