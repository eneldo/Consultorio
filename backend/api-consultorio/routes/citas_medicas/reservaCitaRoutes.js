import express from "express";
const router = express.Router();
import { agregar, listar, eliminar, editar, listarUno } from "../../controllers/citas_medicas/reservaCitaController.js"; 

//rutas privadas
router.get("/", listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/:id", editar);
router.delete("/:id", eliminar);

//rutas publicas

export default router;