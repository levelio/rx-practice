import { fromEvent } from "rxjs";
import { switchMap, map, takeUntil } from "rxjs/operators";

const box: HTMLDivElement = document.querySelector(".box");

const mousedown = fromEvent<MouseEvent>(box, "mousedown");
const mouseup = fromEvent<MouseEvent>(document, "mouseup");
const mousemove = fromEvent<MouseEvent>(document, "mousemove");
mousedown
  .pipe(
    switchMap(e =>
      mousemove.pipe(
        map(event => [event.clientX - e.offsetX, event.clientY - e.offsetY]),
        takeUntil(mouseup)
      )
    )
  )
  .subscribe(([x, y]) => {
    box.style.transform = `translate(${x}px,${y}px)`;
  });
