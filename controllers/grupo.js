const {grupoModel} = require ('../models')


/** obtener lista de la base de datos
@param{*} req
@param{*} res
*/

const getItems = async (req, res)=> {
    const data = await grupoModel.find ({});
    res.send ({data})
};

/** obtener un detalle
@param{*} req
@param{*} res
*/
const getItem = (req, res)=> {};



/** Insertar un registro
@param{*} req
@param{*} res
*/
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await grupoModel.create(body)
    res.send({data})
};


/** Actualizar un registro
@param{*} req
@param{*} res
*/
const updateItem = (req, res)=> {};




/** Eliminar un registro
@param{*} req
@param{*} res
*/
const deleteItem = (req, res)=> {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }