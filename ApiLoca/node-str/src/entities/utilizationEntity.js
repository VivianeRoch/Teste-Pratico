var base = {
    "id": null,
    "dtInicial": null,
    "dtFinal": null,
    "idDriver": null,
    "idCar": null,
    "motivo": null
};

var memoria = [];

function generateId(){
    var maxId = getMaxId();
    return (maxId + 1);
}

function getMaxId(){
    maior = 0;
    memoria.forEach(function(entity){
        if(entity.id > maior){
            maior = entity.id;
        }
    });
    return maior;
}

function persist(entity){
    memoria.push(entity);
}

function retrieve(id){
    var utilizacoesPersistidas = null;
    if(id == null){
        utilizacoesPersistidas = memoria;
    }else{
        memoria.forEach(function(entity){
            if(entity.id == id){
                utilizacoesPersistidas = entity;
            }
        });
    }
    return utilizacoesPersistidas;
}

function updateUtilization(entity){
    memoria.forEach(function(item){
        if(entity.id == item.id){
            item.placa = entity.placa;
            item.cor = entity.cor;
            item.marca = entity.marca;
        }
    });
}

function deleteUtilization(id){
    var index = null;
    memoria.forEach(function(item, i){
        if(entity.id == item.id){
            index = i;
        }
    });
    
    if(index != null){
        memoria.splice(index, 1);
    }
}