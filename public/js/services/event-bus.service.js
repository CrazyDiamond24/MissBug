function on(eventName, listener) {
  const callListener = ({ detail }) => {
    listener(detail)
  }
  window.addEventListener(eventName, callListener)
  return () => {
    window.removeEventListener(eventName, callListener)
  }
}

function emit(eventName, data) {
  window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}
export function showUserMsg(msg) {
  eventBus.emit('show-msg', msg)    
}
export function showSuccessMsg(txt) {
  showUserMsg({txt, type: 'success'})
}
export function showErrorMsg(txt) {
  showUserMsg({txt, type: 'error'})
}

export const eventBus = { on, emit }
