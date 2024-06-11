//
import { Router } from "express";

//
import { authRequired } from "../midlewares/validateToken.js";

//
import {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount
} from "../controllers/account.controller.js";

//
import { validateSchema } from "../midlewares/validator.midleware.js";

//
import { createAccountSchema } from "../schemas/account.schema.js";

// ---------------------------

//
const router = Router();

//
router.get("/accounts", authRequired, getAccounts);

router.get("/accounts/:id", authRequired, getAccount);

router.post(
  "/accounts",
  authRequired,
  validateSchema(createAccountSchema),
  createAccount
);

router.put('/accounts/:id', authRequired, updateAccount );

router.delete("/accounts/:id", authRequired, deleteAccount);

export default router;
