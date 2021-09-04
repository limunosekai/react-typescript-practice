import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
  // bindActionCreators 사용하면 액션을 dispatch 해줌
  // { searchRepositories: dispatch(searchRepositories}
};