'use strict';

import Promise from 'bluebird';

const x = () => {
   return new Promise(function(resolve) {
        setTimeout(()=> { resolve({'a':'a'}) }, 2000);
   });
}
export default x;
