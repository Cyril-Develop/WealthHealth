import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Items = () => {
  const [selectedItem, setSelectedItem] = useState("Department");
  const [isOpen, setIsOpen] = useState(false);

  const listItems = [
    {
      id: 1,
      name: "Engineering",
    },
    {
      id: 2,
      name: "Marketing",
    },
    {
      id: 3,
      name: "Sales",
    },
    {
      id: 4,
      name: "Human Resources",
    },
  ];

  return (
    <div className={isOpen ? "dropDown_wrapper" : "dropDown_wrapper hidden"}>
      <div
        className="dropDown_wrapper_title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem}
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      <ul className="dropDown_wrapper_content">
        {listItems.map(
          (item) =>
            item.name !== selectedItem && (
              <li
                className="dropDown_wrapper_content_item"
                key={item.id}
                onClick={() => setSelectedItem(item.name)}
              >
                {item.name}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Items;
