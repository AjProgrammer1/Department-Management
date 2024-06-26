const express = require("express");
const router = express.Router();
const {
  ChairController,
  ChairAsInstructor,
} = require("../controller/chairController");

const chair = new ChairController();
const chairAsInstructor = new ChairAsInstructor();

router.get("/get-request-accounts", chair.getAllrequest);
router.post("/accept-accounts", chair.acceptAccount);
router.post("/reject-accounts", chair.rejectAccount);
router.post("/create-subject", chair.createSubject);

// ! chair as Instructor Routes
router.post("/create-room", chairAsInstructor.createRoom);
router.post("/reject-enroll", chairAsInstructor.rejectEnroll);
router.post("/accept-enroll", chair.acceptEnroll);
router.get("/enrollee", chairAsInstructor.getEnrollee);
router.post("/getclassmember", chairAsInstructor.getClassMember);

module.exports = router;
