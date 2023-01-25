import { ReactNode } from "react";
import { FaSearch } from "react-icons/fa";

type SearchPokemonProps = {
  value: string;
  onValueChange: any;
};

const SearchPokemon: React.FC<SearchPokemonProps> = (props) => {
  const { value, onValueChange } = props;
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="Type a pokemon"
        value={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
      <div className="SearchIcon">
        <FaSearch />
      </div>
    </div>
  );
};
export default SearchPokemon;
