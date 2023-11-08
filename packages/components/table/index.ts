import { withInstall, withNoopInstall } from '@qionglou/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

// @ts-ignore
export const QlTable = withInstall(Table, {
    TableColumn,
})


export default QlTable
export const QlTableColumn = withNoopInstall(TableColumn)

