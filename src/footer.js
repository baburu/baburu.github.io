import React from "react";

const Footer = (props) => {
  return (
    <div className="babufooter">
      {!props.disableSource && (
        <div>
          <a href="https://wiki.biligame.com/blhx/%E9%A6%96%E9%A1%B5">
            Table Source //
          </a>
        </div>
      )}
      <div>Special Thanks to Samu for the help with the code.</div>
    </div>
  );
};

export default Footer;
