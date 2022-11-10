import { SearchContainer, SearchInput } from './styles';
import { ISearch } from '../../interfaces';

const Search = ({ onChange }: ISearch) => (
  <SearchContainer>
    <SearchInput
      onChange={onChange}
      type="text"
      placeholder="Search"
      data-testid="search"
    />
  </SearchContainer>
);

export default Search;
