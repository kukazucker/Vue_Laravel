import { ref } from 'vue';
import axios from 'axios';

export default function usePersonals(){

    const personals = ref([])

    const getPersonals = async () => {
        let response = await axios('/api/personals');
        personals.value = response.data.personals;
    }

    return {
        personals,
        getPersonals
    }
};