import {Router} from "express";
import {listController} from '../controller/index.js'

const route = Router()


route.get('/', listController.getAllList)

route.get('/:id', listController.getItemById)

export {route as listRoutes}