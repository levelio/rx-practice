import { of,fromEvent } from 'rxjs';
import { switchMap, map, tap,takeUntil } from 'rxjs/operators'

const box = document.getElementsByClassName("box")[0] as HTMLElement
const body = document.body;

const mouseDown = fromEvent<MouseEvent>(box, 'mousedown')
const mouseMove = fromEvent<MouseEvent>(body, 'mousemove')
const mouseUp = fromEvent<MouseEvent>(body, 'mouseup')


mouseDown.pipe(
    switchMap(e => {
        return of([e.clientX - box.offsetLeft, e.clientY - box.offsetTop])
      }),
    tap(() => {
        box.style.cursor = 'move'
      }),
    switchMap(([x, y])  => mouseMove.pipe(
        map(event => ([event.clientX -x, event.clientY -y ]),
        takeUntil(mouseUp))
    ))    
).subscribe(([x,y]) => {
//    console.log([x,y]);
    box.style.top = y + 'px';
    box.style.left = x + 'px';
})


mouseUp.subscribe(()=>console.log('mouse up'))
