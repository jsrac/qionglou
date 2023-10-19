// props.ts
import { Prop } from 'vue'

export type contentHeight =
    | 'smaller'
    | 'small'
    | 'high'
    | 'maximum'
    | 'none'
export type paginationLayout =
    | 'maximum'
    | 'none'

export type PropsType = {
    data: Array<object>
    columns: Array<Column>
    pageNum: Prop<number>
    conHig: Prop<string | contentHeight>
    paging: Prop<string | paginationLayout>
    pageShow: Prop<string>
    site: Prop<string | object>
}

export const Props = {
    data: {
        type: Array,
        default: () => []
    } as Prop<Array<object>>,
    columns: {
        type: Array,
        default: () => []
    } as Prop<Array<Column>>,
    pageNum: {
        type: Number,
        default: 10
    } as Prop<number>,
    conHig: {
        type: String as Prop<string | contentHeight>,
        default: 'none'
    },
    paging: {
        type: String as Prop<string | contentHeight>,
        default: 'none'
    },
    pageShow: {
        type: String as Prop<string>,
        default: 'abridge'
    },
    site: {
        type: String as Prop<string | object>,
        default: 'center'
    }
} as PropsType

interface Column {
    key: string;
    label: string;
    width?: string | number;
    sortable?: boolean;
    fixed?: boolean;
    note: string;
}
