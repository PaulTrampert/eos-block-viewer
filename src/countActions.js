import getActionsFromBlock from './getActionsFromBlock';

export default (block) => {
  return getActionsFromBlock(block).length;
};