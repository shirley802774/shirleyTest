import React from "react";
import "./toolBar.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ToolBar = ({ setRefactorData, tabData }) => {
  const [blockId, setBlockId] = useState(1);
  const changeTheme = (blockData, blockId) => {
    setRefactorData(blockData.Nodes);
    setBlockId(blockId);
  };

  
  return (
    <div className="c-toolBar">
      <ul className="c-toolBar__content">
        {tabData.map((item) => (
          <li
            key={item.BlockId}
            className={`c-toolBar__item ${
              item.BlockId === blockId ? "is_active" : ""
            }`}
            onClick={() => changeTheme(item, item.BlockId)}
          >
            {item.Nodes[0].Link.Text}
          </li>
        ))}
        {/* <li className={"c-toolBar__item " + active} onClick={isActive(1)}>{dataTheme?.Link?.Text}</li> */}
      </ul>
    </div>
  );
};

export default ToolBar;
