import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const refSearch = useRef<HTMLInputElement>(null);
  const { setSearchText } = useGameQueryStore();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (refSearch.current) setSearchText(refSearch.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refSearch}
          borderRadius={20}
          placeholder="Seach games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
