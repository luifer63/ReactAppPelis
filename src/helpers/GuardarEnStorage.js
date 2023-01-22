export const GuardarEnStorage = (clave, elemento) => {
    // conseguir los elementos
    let elementos = JSON.parse(localStorage.getItem(clave))
    // comprobar si es un array
    if(Array.isArray(elementos)){
        //añadir un elemento nuevo
        elementos.push(elemento)
    }else{
        //crear arrayt con la nuevo elemento
        elementos = [elemento]
    }
    // guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos))
    //devolver objeto
    return elementos        
}