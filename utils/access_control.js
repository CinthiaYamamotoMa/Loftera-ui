const AccessControl = require('accesscontrol');

const ac = new AccessControl();

ac
    .grant('candidate')
        .readOwn('Candidate')
    .grant('admin')
        .readAny('Admin')      
        .extend('candidate')
		
module.exports = ac;