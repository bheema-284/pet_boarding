import { ADD_ENTITY } from './action';
const initState = {
  listing: [],
};

const listingReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_ENTITY:
      return { ...store, listing: payload };
    default:
      return store;
  }
};
export { listingReducer };
