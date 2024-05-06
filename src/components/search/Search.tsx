import { useEmployeeStore } from "../../store/employee.store";
import { Employee } from "../../types/interfaces";

interface SearchProps {
  setSearch: (filteredEmployees: Employee[]) => void;
}

export const Search = ({ setSearch }: SearchProps) => {
  const employees = useEmployeeStore((s) => s.employees);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    const filteredEmployees = employees.filter((employee) => {
      return Object.values(employee).some((value) => {
        return value.toString().toLowerCase().includes(search.toLowerCase());
      });
    });
    setSearch(filteredEmployees);
  };

  return (
    <input
      type="text"
      onChange={(e) => handleSearch(e)}
      placeholder="Search..."
      aria-label="Search employees"
    />
  );
};
