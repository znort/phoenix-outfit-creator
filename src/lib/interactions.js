export class Interactions {
  constructor() {
    this.articlePosition = [0, 0]
    this.observers = []
  }
  observe(o) {
    this.observers.push(o)
    this.emitChange()
    return () => {
      this.observers = this.observers.filter((t) => t !== o)
    }
  }
  moveArticle(toX, toY) {
    this.articlePosition = [toX, toY]
    this.emitChange()
  }
  canMoveArticle(toX, toY) {
    const [x, y] = this.articlePosition
    const dx = toX - x
    const dy = toY - y
    return true;
    // (
    //   (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    //   (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    // )
  }
  emitChange() {
    const pos = this.articlePosition
    this.observers.forEach((o) => o && o(pos))
  }
}