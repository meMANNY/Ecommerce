interface Props{

    data: any;
};

export const SearchFilters = ({ data }: Props) => {
  return (
    <div>
        <h2>Search Filters Component</h2>
        {JSON.stringify(data,null,2)}
    </div>
  );
};


