import SearchInput from "./search-input";


interface Props{

    data: any;
};

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className="px-4 lg:px-4 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
        <h2>Search Filters Component</h2>
        {JSON.stringify(data,null,2)}
    </div>
  );
};


