// props.ts

import { Prop } from 'vue'

export type PropsType = {
    data: Array<object>
    columns: Array<Column>
    pageNum: Prop<number>
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
    } as Prop<number>
} as PropsType

interface Column {
    key: string;
    label: string;
    width?: number;
    sortable?: boolean;
}
