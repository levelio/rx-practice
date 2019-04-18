import { fromEvent } from 'rxjs';
import { takeUntil, map, concatAll } from 'rxjs/operators';

let boxMove: HTMLModElement = document.querySelector('.box')
const mouseMove = fromEvent<MouseEvent>(document, "mousemove");
const mouseUp = fromEvent<MouseEvent>(document, "mouseup");
const mouseDown = fromEvent<MouseEvent>(boxMove, "mousedown");
mouseDown.pipe(
    map( e => {
        const { offsetX, offsetY } = e
            return {
                offsetX,
                offsetY
            }
    }),
    map(({ offsetX, offsetY }) => {
        return mouseMove.pipe(
            takeUntil(mouseUp),
            map(moveEvent => ({
                x: moveEvent.clientX - offsetX,
                y: moveEvent.clientY - offsetY
            }))
        );
    }),
    concatAll()
).subscribe(({ x, y }) => {
    boxMove.style.transform = `translate(${x}px, ${y}px)`
});