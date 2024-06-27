class Info{
    name;
    listProduct;
    constructor(nameInput){
        this.name = nameInput
        this.listProduct=[]
}
addProduct(SoTichKiem){
    this.listProduct.push(SoTichKiem)

}
removeProduct(index){
    this.listProduct.splice(index,1);

}
}