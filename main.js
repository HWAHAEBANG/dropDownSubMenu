const header = document.querySelector('header');
const mainMenuList = document.querySelectorAll('.mainmenu > li');
//const nav = document.querySelector('nav');
const subMenu = document.querySelectorAll('.submenu');
let headerHeight = header.offsetHeight;
let subMenuHeight = 0;

// 높이를 고정적으로 설정하기(권장하지않음)
// nav.addEventListener('mouseover',()=>{
//   header.style.height = '270px';
// });

// nav.addEventListener('mouseout',()=>{
//   header.style.height = '50px';
// });

// console.log(subMenu);


// 서브메뉴중에서 가장 높이가 높은 것의 길이를 가져오기
// for(let i = 0; i < subMenu.length; i++){
// if(subMenu[i].offsetHeight > subMenuHeight){
//   subMenuHeight = subMenu[i].offsetHeight;
// }
// }

// console.log(subMenuHeight);


for(let i = 0; i < mainMenuList.length; i++){

  mainMenuList[i].addEventListener('mouseover',()=>{
    header.style.height = headerHeight + subMenu[i].offsetHeight + 'px';
    // subMenuHeight = this.querySelector('ul').offsetHeight; 안되잖음 ㅡㅡ
    // header.style.height = headerHeight + subMenuHeight + 'px'; 안되잖음 ㅡㅡ 
  });

  
  mainMenuList[i].addEventListener('mouseout',()=>{
    header.style.height = headerHeight + 'px'; 
  });


}