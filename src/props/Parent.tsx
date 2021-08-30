import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('gdgd')}>
    {'wdwd'}
  </ChildAsFC>
};

export default Parent;