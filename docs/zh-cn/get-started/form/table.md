# 表格 <Badge type="in"></Badge>
表格组件(`<ql-table>`) 是一个高性能针对复杂场景下海量数据的表单组件

<demo src="./code/table-base.vue" desc="琼楼提供多种场景下的表格和分页组件，适用于大量数据加载和管理，在基础表格组件中，您可以通过 `page-num` 传递表格一页显示的数量，也可以通过 `page-hig` 调整表格的高度，以及是否使用 **虚拟列表** 的功能。" title="基础表格" name="page-num & con-hig"></demo>

## 基础示例
我们提供了多种场景和需求下的分页组件，以供您可以根据简单的例子来快速使用琼楼完成相关业务。在本基础例子中，您可以快速了解到：

1. 表格组件自定义
2. 不同场景下的表头&表格显示方式
3. 列表交互

您可以快速了解到琼楼的设计理念，即单组件复用所共同组成的多个组件，在您实际的业务需求中，也可以进行单个组件的组合实现需要的功能。

<demo src="./code/table-paging.vue" desc="表格组件提供了多种方式供您自定义**表头**的显示方式，您可以进行固定也可以进行对表头的高度和功能的自定义。" title="固定及附加功能" name="paging"></demo>

## 自定义

<demo src="./code/table-mate.vue" desc="基于 Emotion 强大特性，您可以通过 `mate` 方法调整表格组件的各项样式，以满足您的业务需求和设计。" title="自定义样式" name="mate"></demo>