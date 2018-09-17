var config = {}

config.endpoint = "https://dbarqui1grupo1.documents.azure.com";
config.primaryKey = "Vvw81LEzH7OSVZUpr2eLXSkIueS6WEvkDzPbr1YTudlpRbLX4dxZKnxAzyZvyFU2rlPKeGLT8WhvvUKmbRSYPQ==";

config.database = {
    "id": "BDnotification"
};

config.collection = {
    "id": "notificacion"
};

config.documents = {
   
        "Modulo": "SistemaSeguridad",
        "Descripcion": "Se detecto un movimiento dentro de la casa", 
        "Fecha": Date.now()
   
};

module.exports = config;