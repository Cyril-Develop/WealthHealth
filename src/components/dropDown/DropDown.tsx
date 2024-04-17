import "./dropDown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Items from "./items/Items";
import { useState } from "react";

const DropDown = ({ data, selectedItem, setSelectedItem }: { data: { name: string }[], selectedItem: string, setSelectedItem: (item: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropDown">
      <div className="dropDown_title" onClick={() => setIsOpen(!isOpen)}>
        {selectedItem}
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {isOpen && (
        <Items
          listItems={data}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  );
};

export default DropDown;
