import Request from '../../utils/request';

export const demo = data => Request({
  url: '/item/list',
  method: 'GET',
  data,
});
