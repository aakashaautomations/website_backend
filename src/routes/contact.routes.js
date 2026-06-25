import { Router } from "express";

import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} from "../controllers/contact.controller.js";
import { contactRateLimit } from "../middlewares/rate-limit.middleware.js";

const router = Router();

router.post("/create-contact",contactRateLimit, createContact);

router.get("/get-all-contacts", getAllContacts);

router.get("/:id", getContactById);

router.patch("/:id/status", updateContactStatus);

router.delete("/:id", deleteContact);

export default router;