import { ref } from 'vue';

const currentPage = ref(1);

const updateCurrentPage = (page: number) => {
    currentPage.value = page;
    console.log(`Received update. Current page is now: ${page}`);
};

export { currentPage, updateCurrentPage };
