import Vue from 'vue'
//按钮型 button
import DeleteButton from './button/DeleteButton.vue'
import DialogButton from './button/DialogButton.vue'
import DownloadButton from './button/DownloadButton.vue'
import PrimaryButton from './button/PrimaryButton.vue'
import ShowFileButon from './button/ShowFileButon.vue'
import StatusButton from './button/StatusButton.vue'
import SubmitButton from './button/SubmitButton.vue'
import SwitchButton from './button/SwitchButton.vue'
import UploadButton from './button/upload/index.vue'
Vue.component('delete-button', DeleteButton)
Vue.component('dialog-button', DialogButton)
Vue.component('download-button', DownloadButton)
Vue.component('primary-button', PrimaryButton)
Vue.component('show-file-button', ShowFileButon)
Vue.component('status-button', StatusButton)
Vue.component('submit-button', SubmitButton)
Vue.component('switch-button', SwitchButton)
Vue.component('upload-button', UploadButton)
//复合型 composite
import AddPersonTemplate from './composite/AddPersonTemplate.vue'
import DocumentManager from './composite/DocumentManager/index.vue'
import NumberScope from './composite/NumberScope.vue'
import ObjectTablePopover from './composite/ObjectTablePopover.vue'
import OriginalTransferTemplate from './composite/OriginalTransferTemplate.vue'
import ServiceContentTemplate from './composite/ServiceContentTemplate.vue'
import ShowBasicInfo from './composite/ShowBasicInfo.vue'
import TransferDialog from './composite/TransferDialog.vue'
import TransferTable from './composite/TransferTable.vue'
import TrueOrFalse from './composite/TrueOrFalse.vue'
import WorkPersonTemplate from './composite/WorkPersonTemplate.vue'
Vue.component('com-add-person', AddPersonTemplate)
Vue.component('com-document', DocumentManager)
Vue.component('com-numberscope', NumberScope)
Vue.component('com-popover', ObjectTablePopover)
Vue.component('com-original-transfer', OriginalTransferTemplate)
Vue.component('com-service-content', ServiceContentTemplate)
Vue.component('com-showinfo', ShowBasicInfo)
Vue.component('com-transfer-dialog', TransferDialog)
Vue.component('com-transfer-table', TransferTable)
Vue.component('com-truefalse', TrueOrFalse)
Vue.component('com-person-info', WorkPersonTemplate)
//重组型 reassembly
import DatePickerScope from './reassembly/DatePickerScope.vue'
import ElCascader from './reassembly/ElCascader.vue'
import ElCheckboxGroup from './reassembly/ElCheckboxGroup.vue'
import ElDivider from './reassembly/ElDivider.vue'
import ElDataPicker from './reassembly/ElDataPicker.vue'
import ElNumberInput from './reassembly/ElNumberInput.vue'
import ElSelect from './reassembly/ElSelect.vue'
import ElTextarea from './reassembly/ElTextarea.vue'
import QueryInput from './reassembly/QueryInput.vue'
import QueryInput_Net from './reassembly/QueryInput_Net.vue'
Vue.component('rea-datescope', DatePickerScope)
Vue.component('rea-cascader', ElCascader)
Vue.component('rea-checkbox-group', ElCheckboxGroup)
Vue.component('rea-divider', ElDivider)
Vue.component('rea-datepicker', ElDataPicker)
Vue.component('rea-number-input', ElNumberInput)
Vue.component('rea-select', ElSelect)
Vue.component('rea-textarea', ElTextarea)
Vue.component('rea-query-input', QueryInput)
Vue.component('rea-query-input-Net', QueryInput_Net)
//分页
import pagination from '../pagination/index.vue'
Vue.component('pagination', pagination)
