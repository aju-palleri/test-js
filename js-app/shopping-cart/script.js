const product_opt=document.querySelector('#productSelect');
const cart_table=document.querySelector('.cart-table');
const product_qty=document.querySelector('#quantitySelect');
const price_input=document.querySelector('#unit_price');
const add_to_cart=document.querySelector('#addToCart');

let total_cart_value=0;
let lineItems=[];
let lineitem_counter=0;



let products=[
    {
        "id" : 1,
        "name" : "Parle Biscuit",
        "unit_price" : 40,
        "available-quantity" : 10
    },
    {
        "id":2,
        "name":"Britania Biscuit",
        "unit_price":30,
        "available-quantity":5
    },
    {
        "id":3,
        "name":"Sunfeast Biscuit",
        "unit_price":"20",
        "available-quantity":6,
    },
    {
        "id":4,
        "name":"Nestle Biscuit",
        "unit_price":50,
        "available-quantity":7,
    },
    {
        "id":5,
        "name":"Dukes Biscuit",
        "unit_price":35,
        "available-quantity":20,
    }
];
const generateTemplate= (pname)=>{
    
    const html=`
    <option>${pname}</option>
    `;
    product_opt.innerHTML+=html;
};


products.map(function(product) {     
    let pname=product.name;
    let pid=product.id;
    if(pname!=null && pname!=""){
        generateTemplate(pname,pid);   
    }
});

const getUnitPrice=function(item){
    let price="";
    products.map((product)=>{
        
        if(product.name.localeCompare(item)==0){
            price=product.unit_price;
        }
    })
    return price;
};

product_opt.addEventListener('change',function () {
    let price = getUnitPrice(this.value);
    console.log(price);
    price_input.value = price;
});

const getProduct=function(item){
    let curProduct;
    products.map((product)=>{
        if(product.name.localeCompare(item)==0){
            
            curProduct=product;
        }
    })
    return curProduct;
};

const generateCartItemTemplate=(product)=>{
    //let product_total_price=product.unit_price*quantity;
    total_cart_value+=product.lineitem_price;
    const html=`<tr>
        <td>${product.name}</td>
        <td>
            <div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-down" type="button">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input type="text" name="" value="${product.quantity}" class="input-qty form-control text-center" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-up" type="button">+</button></span></div>
        </td>
        <td class="price">${product.unit_price}</td>
        <td>${product.lineitem_price}</td>
        <td class="text-center">
            <a href="#" class="remove_cart" rel="2">
                <i class="fa fa-trash-o"></i>
            </a>
        </td>
    </tr>`;
    cart_table.innerHTML+=html;
};

const updateAndRerenderLineItems= (index,quantity)=>{
    lineItems[index].quantity+=quantity;
    lineItems[index].lineitem_price=lineItems[index].quantity*lineItems[index].unit_price;
    cart_table.innerHTML='';
    for(let i=0;i<lineItems.length;i++){
        generateCartItemTemplate(lineItems[i]);
    }
    calculateCartPrice(lineItems);
}

const generateLineItemObj=(selectedProduct,selectedQuantity)=>{
    let itemExists=false;
    for(let i=0;i<lineItems.length;i++){
        if(lineItems[i].name==selectedProduct.name)
        {
            updateAndRerenderLineItems(i,selectedQuantity);
            itemExists=true;
            break;
        }
    }
    if(!itemExists){
        let product_total_price=selectedProduct.unit_price*selectedQuantity;
        let lineitem={
            "name" : selectedProduct.name,
            "quantity" : selectedQuantity,
            "unit_price" :selectedProduct.unit_price,
            "lineitem_price":product_total_price
        };
        lineItems[lineitem_counter++]=lineitem;
        generateCartItemTemplate(lineitem);
    }
}

add_to_cart.addEventListener('click',e=>{
    e.preventDefault();
    let selectedProduct=getProduct(product_opt.value);
    let selectedQuantity=parseInt(product_qty.value);
    generateLineItemObj(selectedProduct,selectedQuantity);
    calculateCartPrice(lineItems);
    //lineItems[lineitem_counter++]=selectedProduct;
    //generateCartItemTemplate(selectedProduct,selectedQuantity);
    document.getElementById("carttotal").innerHTML="Total   Rs :"+total_cart_value;

    console.log(lineItems)
});

const calculateCartPrice=(items)=>{
    total_cart_value=0;
    for(let i=0;i<lineItems.length;i++){
        total_cart_value+=lineItems[i].lineitem_price;
    }
}





