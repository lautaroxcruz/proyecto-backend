class ProductManager {
    constructor(){
        this.products = []
    }

    //recuperar productos
    getProducts = () => { return this.products }

    //generar ID del producto incrementando +1 por cada producto nuevo
    generateID = () => {
        const count = this.products.length

        if (count == 0) return 1;

        const lastProduct = this.products[count - 1]
        const lastID = lastProduct.id
        const nextID = lastID + 1

        return nextID
    }


    //verifica que todos los campos estén completos, si uno está vacío no agrega el producto
    
    validateFields = (title, description, price, thumbnail, stock, code) =>{
        if((title == undefined || title == "") || (description == undefined || description == "") || (price == undefined ||price == "") || (thumbnail== undefined || thumbnail== "") || (code == undefined) || (stock == undefined || stock == "")){
            console.log("ERROR AL AGREGAR PRODUCTO: TODOS LOS CAMPOS SON OBLIGATORIOS")
            return false;
        }else{
            return true;
        }
    }

    //verifica que no se repitan los códigos de los productos, si se repiten devuelve error y no lo agrega

    duplicateCode = (code) => { 
        const product = this.products.find(product => product.code === code)
        if(product == undefined){
            return true;
        } else if(product != undefined){ 
            console.log(`ERROR: EL CÓDIGO "${code}" NO PUEDE REPETIRSE`);
            return false;
        }
    }


    //añadir producto
    addProduct = (title, description, price, thumbnail, stock, code) => {
        const id = this.generateID()

        const product = {
            id,
            title,  
            description,
            price,
            thumbnail,
            stock,
            code
        }

        if(this.duplicateCode(code) && this.validateFields(title, description, price, thumbnail, stock, code)){
            this.products.push(product)
        }
    }


    getProductByID = (id) => {
        const productFound = this.products.find(product => product.id === id)
        return productFound || console.log(`ERROR: EL PRODUCTO CON EL ID ${id} NO EXISTE`)
    }
}

const manager = new ProductManager()

getProducts = () => {return this.products}; //muestra el array sin productos

//productos a agregar
manager.addProduct(
    "productoUno",
    "descripcionUno",
    88888,
    "N/A",
    1,
    "lorem"
)

manager.addProduct(
    "productoDos",
    "descripciónDos",
    3333,
    "N/A",
    2,
    "ggdfg"
)

manager.addProduct(
    "productoTres",
    "descripciónTres",
    666,
    "N/A",
    98,
    "ddsfk"
)

//este producto no se agrega porque le falta el título
manager.addProduct(
    "productoTres",
    "descripciónTres",
    666,
    "N/A",
    98,
    "ddsfk"
)

//este producto no se agrega por tener el valor "code" repetido
manager.addProduct(
    "productoUno",
    "descripcionUno",
    88888,
    "N/A",
    1,
    "lorem"
)

console.log(manager.getProducts()); //muestra el array con los productos ya agregados

console.log("----------------------------")
console.log("PRODUCTO SELECCIONADO:", manager.getProductByID(2)); //devuelve el producto con ID 2
console.log("----------------------------")
console.log(manager.getProductByID(6)); //devuelve error ya que no existe producto con ese ID