const $ = selectors => document.querySelector(selectors);
const $$ = selectors => document.querySelectorAll(selectors);
const navList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const holdItemDom = document.createElement("div");
holdItemDom.classList.add("item", "hold");
const listDom = document.createElement("div");
listDom.classList.add("items");
navList.forEach((v, i) => {
  const itemDom = document.createElement("div");
  itemDom.classList.add("item");
  itemDom.dataset.sortindex = i as any;
  itemDom.textContent = v;
  listDom.appendChild(itemDom);
});

$(".box").appendChild(listDom);

//主要代码
var dragObj;
//考虑到item数量会很多，不需要给每个item单独绑定mousedown,mousemove,mouseup事件
listDom.onmousedown = event => {
  let currenIndex, previousIndex;
  const itemDomList = $$(".items .item");
  const listLength = navList.length;
  const startY = event.clientY;
  //找到mousedown的item
  let selectIndex;
  dragObj = event.target;
  Array.from(itemDomList).forEach((v, i) => {
    if (v === event.target) {
      selectIndex = i;
    }
  });

  dragObj.after(holdItemDom);
  dragObj.classList.add("select");
  dragObj.style.top = dragObj.clientHeight * selectIndex + "px";

  const itemHeight = dragObj.clientHeight;
  let topIndex = selectIndex;
  const startTop = dragObj.style.top;

  previousIndex = Math.ceil((parseInt(startTop) - itemHeight / 2) / itemHeight);
  document.onmousemove = function(event) {
    dragObj.classList.add("select");
    const moveY = event.clientY;
    const presentTop = parseInt(startTop) + (moveY - startY);
    dragObj.style.top = presentTop + "px";
    currenIndex = Math.ceil((presentTop - itemHeight / 2) / itemHeight);
    if (currenIndex < 0) currenIndex = 0;
    if (currenIndex > listLength - 1) currenIndex = listLength - 1;
    if (previousIndex !== currenIndex) {
      holdItemDom.remove();
      if (previousIndex > currenIndex && currenIndex < topIndex) {
        dragObj.remove();
        itemDomList[currenIndex].before(dragObj);
        dragObj.after(holdItemDom);
      } else {
        const currentItems = $$(".box .item");
        currentItems[currenIndex].after(holdItemDom);
      }
      previousIndex = currenIndex;
      if (currenIndex < topIndex) topIndex = currenIndex;
    }
  };
  document.onmouseup = function(event) {
    const currentItems = $$(".box .item");
    if (currenIndex > topIndex) {
      currentItems[currenIndex].after(dragObj);
    }
    holdItemDom.remove();
    dragObj.classList.remove("select");
    dragObj.removeAttribute("style");
    document.onmousemove = null;
    document.onmouseup = null;
  };
};
