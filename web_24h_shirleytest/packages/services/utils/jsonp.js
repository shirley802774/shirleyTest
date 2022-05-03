import jsonP from 'jsonp';

export default class Fetch {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      jsonP(
        options.url,
        {
          param: 'callback',
        },
        function (err, response) {
          if (response) {
            resolve(response);
          } else {
            reject(response.message);
          }
        }
      );
    });
  }
}
