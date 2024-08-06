const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages); //fetch all msgs in a chat
router.route("/").post(protect, sendMessage);

module.exports = router;
