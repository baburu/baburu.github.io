import React from "react";

const Footer = (props) => {
  return (
    <div className="babufooter">
      {!props.disableSource && (
        <div>
          <a href="https://nga.178.com/read.php?tid=34272932">
            Table Source //
          </a>
        </div>
      )}
      <div>Special Thanks to Samu and Apeacefulpanda for the help with the code.</div>
    </div>
  );
};

export default Footer;
