import { Router } from "express";
import {
    createPdf, createUser, getAllUsers, updateUserProfile, updateUserProjects, updateUserEducation, updateUserWorkExperience, updateUserVolunteerExperience, updateUserAward, getUserWithUsername, registerUsername, checkIfUserExists,
} from "../Controller";

const router = Router()

router.get('/userexists/:email',checkIfUserExists)
router.get('/getallusers', getAllUsers)
router.get('/:username', getUserWithUsername)
router.post('/createuser', createUser)
router.post('/getusername/:id', registerUsername)
router.put('/user/:id', updateUserProfile)
router.post('/projects/:id', updateUserProjects)
router.post('/education/:id', updateUserEducation)
router.post('/work/:id', updateUserWorkExperience)
router.post('/volunteer/:id', updateUserVolunteerExperience)
router.post('/award/:id', updateUserAward)
export default router;