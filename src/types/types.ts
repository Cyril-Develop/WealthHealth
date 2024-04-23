export type DropDownProps = {
  data: { name: string }[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
};

export type ItemsProps = {
  listItems: { name: string }[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  setIsOpen: (isOpen: boolean) => void;
};