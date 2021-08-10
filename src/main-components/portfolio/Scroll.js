import { useState } from "react";
import useInfiniteScroll from "../../controllers/InfiniteScroll";

const Scroll = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );
  const fetchMoreListItems = () => {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 1000);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems)



  return (
    <div>
      <ul className="list-group mb-2">
        {listItems.map((item) => (
          <li className="list-group-item">List Item {item}</li>
        ))}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </div>
  );
};

export default Scroll;
