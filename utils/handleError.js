const handleHttpError =(res, message = 'Algo ocurrió', code = 403) => {
    res.status(code);
    res.send({ error: message});
} 

module.exports = {handleHttpError}