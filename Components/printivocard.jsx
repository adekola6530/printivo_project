import React from "react";
import brochure from "../src/images/brochure-printing.png";

function Printivocard() {
  return (
    <div>
      <div className="row">
        <div className="col-4 md-4 sm-1">
          <img src={brochure} style="w-50" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Printivocard;
