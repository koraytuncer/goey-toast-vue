import type { ToasterProps } from 'sonner'

let _position: ToasterProps['position'] = 'bottom-right'

export function setGoeyPosition(position: ToasterProps['position']) {
  _position = position
}

export function getGoeyPosition() {
  return _position
}
