/* eslint-disable vue/no-reserved-component-names */
import type { App } from 'vue'
import './assets/scss/main.scss'

import { Button, FormGroup, Modal, MultipleSelect, Pagination, RadioButton } from './components'

export default {
  install: (app: App) => {
    app.component('Button', Button)
    app.component('FormGroup', FormGroup)
    app.component('Modal', Modal)
    app.component('MultipleSelect', MultipleSelect)
    app.component('Pagination', Pagination)
    app.component('RadioButton', RadioButton)
  }
}

export { Button, FormGroup, Modal, MultipleSelect, Pagination, RadioButton }
