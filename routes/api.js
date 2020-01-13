const router = require('koa-router')();
const Project = require('../controllers').Project;
const Vapi = require('../controllers').Vapi
const Cors = require('../controllers').Cors
const Varied = require('../controllers').Varied




router.prefix('/api');

router.post('/json',Cors.getJSON);

// 项目
router.get('/project/list', Project.getProjects);
router.get('/project/detail',Project.detail);
router.post('/project/create',Project.createProject);
router.post('/project/delete',Project.removeProject);
router.post('/project/update',Project.updateProject);

router.post('/project/savetree',Project.saveTree);

// api
router.get('/vapi/list', Vapi.getVapis);
router.get('/vapi/search', Vapi.searchVapis);
router.get('/vapi/detail', Vapi.detail);
router.post('/vapi/create',Vapi.createVapi);
router.post('/vapi/delete',Vapi.removeVapi);


// api 分级
router.get('/varied/list', Varied.getVarieds);
router.post('/varied/updata', Varied.updateVariedSQ);
router.post('/varied/delete', Varied.removeByid);



module.exports = router
