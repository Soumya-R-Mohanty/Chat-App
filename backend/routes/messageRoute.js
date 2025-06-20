import express, { Router } from "express"
import { getMessage, sendMessage } from "../controller/messageControler.js"
import isAuthenticated from "../middleware/isAuthenticated.js"

const router=Router()
router.route('/send/:id').post(isAuthenticated,sendMessage)
router.route('/:id').get(isAuthenticated,getMessage)

export default router