import React from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

const Tooltip = (props) => {
  const [mounted, setMounted] = React.useState(false);

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    trigger: "click",
    interactive: true,
    onVisibleChange: setMountedOnceVisible,
    placement: "right",
  });

  function setMountedOnceVisible(visible) {
    if (!mounted && visible) {
      setMounted(true);
    }
  }

  return (
    <div>
      <a className="btn my-popover" ref={setTriggerRef}>
        <img src={require(`${props.nikke}`)} />
      </a>
      {mounted && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: "tooltip-container",
            style: visible
              ? { visibility: "visible" }
              : {
                  visibility: "hidden",
                  pointerEvents: "none",
                },
          })}
        >
          <span>Description</span>
          <hr style={{ margin: "0" }} />
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          <div
            style={{
              marginTop: "1rem",
              whiteSpace: "pre",
              fontWeight: "lighter",
            }}
          >
            {props.name}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
