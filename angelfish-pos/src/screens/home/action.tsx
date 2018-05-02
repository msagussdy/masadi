import { AsyncStorage } from 'react-native';
import { searchProduct } from '../../helpers/fetch-data';
import ActionTypes from '../../store/action-types';

export const fetchSearch = (keyword: string) => dispatch => {
  return searchProduct(keyword).then(data => {
    dispatch(productsData(data));
  });
};

export const productsData = data => ({
  type: ActionTypes.PRODUCTS_DATA_LIST,
  products: data.hits,
  totalPage: data.total.totalPages,
  totalProducts: data.total.totalCount
});

export default {
  fetchSearch
};
