export const Props = {
  title: {
    type: String,
    default: '标题'
  },
  visible: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '50%'
  },
  height: {
    type: String,
    default: '50%'
  },
  top: {
    type: String,
    default: '50%'
  },
  left: {
    type: String,
    default: '50%'
  },
  zIndex: {
    type: Number,
    default: 1000
  },
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  center: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  modalAppendToBody: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  beforeClose: {
    type: Function,
    default: () => {}
  }
}

export const Emits = {
  close: () => {},
}
