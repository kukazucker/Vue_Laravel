import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'

export default function useParameters(){

    const trainings = ref([]);
    const user_param = ref([]);
    const router = useRouter();
    const errors = ref('')

    const getTrainings = async (day) => {
        let response = await axios.get('/api/trainings/' + day);
        trainings.value = response.data.data;
    }

    return {
        trainings,
        getTrainings
    }
};