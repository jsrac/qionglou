import { ref } from 'vue';

const currentPage = ref(1);
const tableName = ref();

const updateCurrentPage = (page: number, name: string) => {
    currentPage.value = page;
    tableName.value = name
    console.log(`Component ${name}，${tableName.value}: Current Page Updated to ${page}`);
};
export { currentPage,tableName, updateCurrentPage };
