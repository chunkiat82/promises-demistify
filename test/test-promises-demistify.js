'use strict';



import Test from 'tape';
import x from '../dist/lib';

Test('test promises-demistify', (t) => {

    t.test('plan', (t) => {
        t.plan(1);
         x().then((obj)=>{
            console.log(obj);
         });
        t.ok(true);
    });

});
