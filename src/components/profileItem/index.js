import React from "react";
import Icon from "../icon";

export default function ProfileItem({
  type,
  title,
  onClick,
  checkedSwitch,
  isChecked,
}) {
  const [checked, setChecked] = React.useState(isChecked);
  const changeChecked = () => {
    setChecked(!checked);
    checkedSwitch(checked);
  };
  return (
    <div
      className="d-flex align-items-center pt-3 ps-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="ms-2 pb-3 d-flex border-bottom w-100 align-items-center">
        <div>
          <h6 className="m-0 fw-bold text-muted">{title}</h6>
        </div>
        <div className="ms-auto pe-3">
          {type === 0 ? (
            <Icon name="chevron-right" theme="darkgray" size=".9rem" />
          ) : (
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                role="switch"
                checked={checked}
                onChange={changeChecked}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
