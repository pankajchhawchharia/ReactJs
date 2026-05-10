import React,{useState,useEffect} from 'react';
function useDebounce(value,delay) {
  const [debounceValue,setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    },delay);
    return () => clearTimeout(handler);
  },[value,delay]);
  return debounceValue;
}

function SearchComponent() {
  const [searchTerm,setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm,5000);
  useEffect(() => {
    if(debouncedTerm) {
      console.log('search for:',debouncedTerm);
    }
  },[debouncedTerm]);
  return (
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    );
}
export default SearchComponent;
