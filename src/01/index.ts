import { fromEvent } from 'rxjs'
import { map, switchMap, takeUntil } from 'rxjs/operators'

const box = document.querySelector(".box");
const mouseDown$ = fromEvent(box, "mousedown");
const mouseMove$ = fromEvent(document, "mousemove");
const mouseUp$ = fromEvent(document, "mouseup");

mouseDown$.pipe(
  map((event: MouseEvent) => ({
    x: event.clientX,
    y: event.clientY,
    initPos: getTranslate(event.target)
  })),
  switchMap(pos => {
    return mouseMove$.pipe(
      map((event: MouseEvent) => ({
        x: event.clientX - pos.x + pos.initPos.x,
        y: event.clientY - pos.y + pos.initPos.y
      })),
      takeUntil(mouseUp$)
    )
  })
).subscribe(pos => {
  console.log(pos)
  setTranslate(box, pos)
})

function getTranslate (element) {
  const style = getComputedStyle(element)
  const regExp = /matrix\((\d+,\s){4}(\d+),\s(\d+)/i
  const result = style.transform.match(regExp)
  if (result) {
    return {
      x: parseInt(result[2], 10),
      y: parseInt(result[3], 10)
    }
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}

function setTranslate (element, pos) {
  element.style.transform = `translate(${pos.x}px, ${pos.y}px)`
}