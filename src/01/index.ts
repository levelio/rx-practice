import { fromEvent } from 'rxjs';
import { concatMap, takeUntil, map } from 'rxjs/operators';

const box = document.querySelector('.box')
const mouseDown$ = fromEvent(box, 'mousedown'),
  mouseUp$ = fromEvent(document, 'mouseup'),
  mouseMove$ = fromEvent(document, 'mousemove');

const drag$ = mouseDown$.pipe(
  concatMap(evt => {
    const initialLeft = box.offsetLeft,
      initialTop = box.offsetTop;
    return mouseMove$.pipe(
      takeUntil(mouseUp$),
      map(mouseEvt => {
        return {
          x: mouseEvt.x - evt.x + initialLeft,
          y: mouseEvt.y - evt.y + initialTop,
        };
      })
    );
  }),
);

drag$.subscribe((pos) => {
  box.style.left = pos.x + 'px';
  box.style.top = pos.y + 'px';
  // console.log(`translate(${pos.x}px, ${pos.y}px);`)
  // box.style.transform = `translate(${pos.x}px, ${pos.y}px);`
})
