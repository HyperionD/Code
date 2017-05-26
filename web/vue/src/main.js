import { ajax } from './ajax.js';

const url = '54.223.92.89:8888/ctr/prg/webservice?action=ping2';

ajax({ url: url })
    .then(function show_data(data) {
        console.log(data);
    })