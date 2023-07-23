import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../feature/BrewerySlice";

function WishList() {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.brewery.wishlist);
  const [wishlist, setwishlist] = useState(wishlistData);
  const removeWishlistItem = useCallback(
    (item) => {
      dispatch(removeFromWishList(item));
      const index = wishlist.findIndex((list) => list.id === item.id);
      const arr = [...wishlist];
      arr.splice(index, 1);
      setwishlist(arr);
    },
    [dispatch, wishlist]
  );
  const listWishlist = useMemo(() => {
    if (wishlist.length !== 0) {
      return wishlist.map((item) => (
        <li key={item.id} className="m-4">
          <h3 className="row mp-0">{item.name}</h3>
          <h5 className="row">{item.address_1}</h5>
          <button
            className="row btn bg-secondary"
            onClick={() => removeWishlistItem(item)}
          >
            Remove from Wishlist
          </button>
        </li>
      ));
    }
    return <li className="container">No items in wishlist</li>;
  }, [removeWishlistItem, wishlist]);
  return (
    <div className="wh-100">
      <h1 className="container w-100">Wishlist</h1>
      <ul className="list-inline mx-5 p-3 w-100 d-flex flex-column">
        {listWishlist}
      </ul>
    </div>
  );
}

export default WishList;
