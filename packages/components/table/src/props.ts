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
    url: Prop<string>
    font: Prop<string>
    color: Prop<string>
    weight: Prop<string>
    background: Prop<string>
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
    },
    weight: {
        type: String as Prop<string>,
        default: '500'
    },
    color: {
        type: String as Prop<string>,
        default: '',
    },
    font: {
        type: String as Prop<string>,
        default: ''
    },
    url: {
        type: String as Prop<string>,
        default: ''
    },
    background: {
        type: String as Prop<string>,
        default: 'rgba(255,255,255,0)'
    }
} as PropsType

interface Column {
    key: string;
    label: string;
    width?: string | number;
    sortable?: boolean;
    fixed?: boolean;
    titleFix?: boolean;
    note: string;
}
