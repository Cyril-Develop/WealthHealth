const Items = ({
  listItems,
  selectedItem,
  setSelectedItem,
  setIsOpen,
}: {
  listItems: { name: string }[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const selectItemAndClose = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  type ItemType = {
    name: string;
  };

  return (
    <ul className="dropDown_content">
      {listItems.map(
        (item: ItemType, index: number) =>
          item.name !== selectedItem && (
            <li
              className="dropDown_content_item"
              key={index}
              onClick={() => selectItemAndClose(item.name)}
            >
              {item.name}
            </li>
          )
      )}
    </ul>
  );
};

export default Items;
