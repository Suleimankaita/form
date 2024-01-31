 const product=[
    {


    "id":1,
    "image":"./1.0.1.jpg",
    "title":"black jacket",
    "price":200
},
    {
        "id":2,
    "image":"./1.0.2.jpg",
    "title":"black jacket",
    "price":200
    },
    {
        "id":3,
    "image":"./1_1.jpg",
    "title":"black jacket",
    "price":100
    },
    {
        "id":4,
    "image":"./130.jpg",
    "title":"black jacket",
    "price":50
    },
    {
        "id":5,
    "image":"./7_1.jpg",
    "title":"black jacket",
    "price":60
    },
    {
        "id":6,
    "image":"./8.0.3.jpg",
    "title":"black jacket",
    "price":80
    }
]
const cate=[... new Set(product.map((item)=>{
    return item
}))]
    


let i =0;
let show =document.getElementById("show").innerHTML=cate.map((item)=>{
    var {image,title,price}=item;
    return` 
    <div class="content-2">
    <div class="inner2"> 
         <img src=${image} alt="" width="100px" height="100px">`+"<svg class='svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' onclick='add("+(i++)+")' /></svg>"+`<p class='xe'>$${price}</p>
          <h3 class='sen'>${title}</h3>
      </div>
    </div>
    </div>
    `
})
const list=[];
    const add=(a)=>{
        list.push[{...cate[a]}]
        console.log(list)
        display()
    }
 
    const display =(a)=>{
        let j=0;
        if(list.length===0){
            document.getElementById("count").innerHTML=list.length;
            document.getElementById("opo").innerHTML="YOUR CART IS EMPTY"
        }else{
            document.getElementById("opo").innerHTML=list.map((item)=>{
                var {image,title,price}=item;
                return`
                <div class="cart">    
                <img class="round" src=${image} alt="" width="100px" ></div>
                `+"<svg class='svg' onclick='add("+(j++)+")' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'/></svg>"
        })
    }}



/* const init= ()=>{
    const cate=fetch("add.json").then(response=>{
        response.json();
        response=list
        console.log(cate)
    })
}
init() */