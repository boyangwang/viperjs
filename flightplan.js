const plan = require('flightplan');

plan.target('staging', {
    host: 'playground.wangboyang.com',
    port: 22,
    username: 'root',
    privateKey: 'C:\\Users\\wangb\\.ssh\\id_rsa',
});
const gitDir = '/var/www/viperjs';
plan.remote(['clean-deploy', 'deploy'], (remote) => {
    remote.sudo(`npm --prefix ${gitDir} stop`, { failsafe: true });
});
plan.remote(['clean-deploy'], (remote) => {
    remote.rm(`-rf -- ${gitDir}`);
    remote.sudo('cd /var/www && git clone https://github.com/boyangwang/viperjs.git');
});
plan.remote(['clean-deploy', 'deploy'], (remote) => {
    remote.sudo(`cd ${gitDir} && git pull origin master`);
    remote.sudo(`npm --prefix ${gitDir} run full-build`);
});
plan.remote(['clean-deploy', 'deploy', 'start'], (remote) => {
    remote.sudo(`npm --prefix ${gitDir} start`);
});
