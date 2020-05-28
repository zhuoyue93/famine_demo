import Request from '../../utils/request';

export const demo = data => Request({
  url: '/item/info',
  method: 'POST',
  data,
});

export const queryrecord = data => Request({
  url: '/itemrecord/record',
  method: 'POST',
  data,
});


export const buy = data => Request({
  url: '/itemrecord/buy',
  method: 'POST',
  data,
});
