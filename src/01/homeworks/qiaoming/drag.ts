import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export default function drag(box: Element) {
  function handleDrag(mousedownValue) {
    const mouseMoveObserver = fromEvent(document, 'mousemove')
      .pipe(
        map((e: any) => {
          const {
            mouseStartX,
            mouseStartY,
            originX,
            originY,
            target
          } = mousedownValue
          const { clientX: mouseCurrentX, clientY: mouseCurrentY } = e
          const moveX = mouseCurrentX - mouseStartX
          const moveY = mouseCurrentY - mouseStartY
          let x = originX + moveX
          let y = originY + moveY

          return { target, x, y }
        })
      )
      .subscribe(({ target, x, y }) => {
        target.style.transform = `translateX(${x}px) translateY(${y}px)`
      })

    const mouseUpObserver = fromEvent(document, 'mouseup').subscribe(() => {
      mouseMoveObserver.unsubscribe()
      mouseUpObserver.unsubscribe()
    })
  }

  fromEvent(box, 'mousedown')
    .pipe(
      map((e: any) => {
        const { clientX: mouseStartX, clientY: mouseStartY } = e
        const target = e.currentTarget
        const { transform } = target.style
        let originX = 0
        let originY = 0
        if (transform) {
          const matchedX = transform.match(/translateX\((.*?)px\)/)
          matchedX && (originX = Number(matchedX[1]))
          const matchedY = transform.match(/translateY\((.*?)px\)/)
          matchedY && (originY = Number(matchedY[1]))
        }
        return { mouseStartX, mouseStartY, originX, originY, target }
      })
    )
    .subscribe(handleDrag)
}

const box = document.querySelector('.box')
drag(box)
