import React, { useEffect } from "react";

const Title = (props) => {
  useEffect(() => {
    document.title = props.title;
  });

  return (
    <div className="title-wrap">
      <div className="title">
        <span style={{ fontSize: props.titleFontSize ?? "16pt" }}>
          {props.title}
        </span>
        {props.subtitle && (
          <span style={{ fontSize: props.subtitleFontSize ?? "12pt" }}>
            <br />
            {props.subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default Title;
