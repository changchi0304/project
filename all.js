let data=[
    {
    charge:"免費",
    name:"小明充電站"
},{
    charge:"投幣式",
    name:"小花充電站" 
},{
    charge:"投幣式",
    name:"小陳充電站" 
},{
    charge:"免費",
    name:"小趙充電站" 
}
];
function init(){
    const list=document.querySelector(".list");
let str="";
data.forEach(function(item,index){
    let content=(`<li>${item.name},${item.charge}</li>`);
    str+=content;
    
    
})
list.innerHTML=str;
}
init();

const edenfilter =document.querySelector('.filter');
edenfilter.addEventListener("click",function(e){
    if(e.target.value==undefined){
        return;
    }
    let str="";
    data.forEach(function(item,index){
        if (e.target.value=="全部"){
            str+=`<li>${item.name},${item.charge}</li>`
        }
        if (e.target.value==item.charge){
            str+=`<li>${item.name},${item.charge}</li>`
        }
    })
    const list=document.querySelector('.list');
    list.innerHTML=str;
})
const stationName=document.querySelector('.stationName');
const stationCharge=document.querySelector('.stationCharge');
const btn=document.querySelector('.btn');

btn.addEventListener('click',function(e){
    console.log(stationName.value);
    console.log(stationCharge.value);
    let obj={}
    obj.charge=stationCharge.value;
    obj.name=stationName.value;
    console.log(obj);
    data.push(obj);
    init();
})
    

