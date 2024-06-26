"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("../Controller");
const router = (0, express_1.Router)();
router.get('/userexists/:email', Controller_1.checkIfUserExists);
router.get('/getallusers', Controller_1.getAllUsers);
router.get('/:username', Controller_1.getUserWithUsername);
router.post('/createuser', Controller_1.createUser);
router.post('/getusername/:id', Controller_1.registerUsername);
router.put('/user/:id', Controller_1.updateUserProfile);
router.post('/projects/:id', Controller_1.updateUserProjects);
router.post('/education/:id', Controller_1.updateUserEducation);
router.post('/work/:id', Controller_1.updateUserWorkExperience);
router.post('/volunteer/:id', Controller_1.updateUserVolunteerExperience);
router.post('/award/:id', Controller_1.updateUserAward);
exports.default = router;
//# sourceMappingURL=Route.js.map