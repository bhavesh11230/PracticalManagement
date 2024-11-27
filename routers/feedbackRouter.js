import {createAdmin,createTeacher,createStudent,getAllUsers,getAllTeacher,getAllStudent, getAllAdmin} from "../controller/Usercontroller.js";
import { createSubject,getAllSubject } from "../controller/SubjectController.js";
import { createPractical,getAllPractical} from "../controller/PracticalController.js";
import { enrollStudent } from "../controller/EnrollController.js";
import { isAdmin,isAdminOrTeacher,isTeacher,isSuadmineacher } from "../middleware/Middleware.js";
import express from "express";

const router  = express.Router();

router.post("/admin/create",createAdmin);
router.post("/teacher/create",createTeacher);
router.post("/student/create",createStudent);
router.get("/users/get",isAdmin,getAllUsers);
router.get("/admins/get",isAdmin,getAllAdmin);
router.get("/teachers/get",isAdmin,getAllTeacher);
router.get("/students/get",isAdminOrTeacher,getAllStudent);
router.post("/subjects/create",isSuadmineacher,createSubject);
router.post("/practicals/create",isTeacher,createPractical);

router.get("/subjects/get",getAllSubject);
router.post("/practicals/enroll",enrollStudent);
router.get("/practicals/get",getAllPractical);

export default router;



