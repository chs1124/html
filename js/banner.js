let slideWrap=document.getElementById('slide-wrap');//获取对象
let slideCentent=slideWrap.children[0]//获取子集

let viewWidth=document.documentElement.clientWidth || document.body.clientWidth;//获取可视区'

let firstUl=slideWrap.getElementsByTagName('ul')[0]//获取对象下的ul,第1个
let liItem=firstUl.children//获取ul的子集
//获得a
let secondeUl=slideWrap.getElementsByTagName('ul')[1]
let aItem=secondeUl.children
//箭头
let slidePrev=slideWrap.getElementsByTagName("span")[0];
let slideNext=slideWrap.getElementsByTagName("span")[1];

//存储索引
let index=0;
for(let i=0;i<aItem.length;i++){
    aItem[i].onclick=function(){
        for(let k=0;k<aItem.length;k++){
            aItem[k].className=''
        }
        aItem[i].className='current'
        slide(i)
        index=i
        console.log(i)
    }
   
}
//设置滑动对象的宽度
 slideCentent.style.width=viewWidth*liItem.length+'px'

 //设置li对象的宽度
 for(let i=0;i<liItem.length;i++)
 {
     liItem[i].style.width=viewWidth+'px'     
 }
 

 //滑动方法
 function slide(index){
    let left=index*viewWidth
    
     slideCentent.style.left=-left+'px'
     
 }

 //箭头方法
 slidePrev.onclick=function(){
    index--
    if(index<0){
        index=liItem.length-1
    }
    slide(index)
 }
 slideNext.onclick=function(){
     index++
     if(index>liItem.length-1){
         index=0
     }
     slide(index)
 }

