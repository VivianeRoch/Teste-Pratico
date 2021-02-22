var base = {
    "id": null,
    "placa": null,
    "cor": null,
    "marca": null
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
    var carrosPersistidos = null;
    if(id == null){
        carrosPersistidos = memoria;
    }else{
        memoria.forEach(function(entity){
            if(entity.id == id){
                carrosPersistidos = entity;
            }
        });
    }
    return carrosPersistidos;
}

function updateCar(entity){
    memoria.forEach(function(item){
        if(entity.id == item.id){
            item.placa = entity.placa;
            item.cor = entity.cor;
            item.marca = entity.marca;
        }
    });
}

function deleteCar(id){
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