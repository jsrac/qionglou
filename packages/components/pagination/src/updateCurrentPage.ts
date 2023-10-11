import { ref } from 'vue';

const currentPage = ref(1);

const updateCurrentPage = (page: number) => {
    currentPage.value = page;
};

export { currentPage, updateCurrentPage };
