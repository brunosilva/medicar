import {
  faPlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

const icons = [
  {
    type: 'plus',
    icon: faPlus
  },
  {
    type: 'close',
    icon: faXmark
  }
]

export default function selectIcon(type: string) {
  return icons.find(item => item.type === type)?.icon
}
