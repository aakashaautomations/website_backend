import { Router } from "express";

import {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiry.controller.js";
import { contactRateLimit } from "../middlewares/rate-limit.middleware.js";

const router = Router();

router.post("/create-enquiry",contactRateLimit, createEnquiry);

router.get("/get-all-enquiries", getAllEnquiries);

router.get("/:id", getEnquiryById);

router.patch("/:id/status", updateEnquiryStatus);

router.delete("/:id", deleteEnquiry);

export default router;