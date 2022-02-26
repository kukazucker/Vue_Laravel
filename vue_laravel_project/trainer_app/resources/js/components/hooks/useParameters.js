import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'

export default function useParameters(){

    const usersInGroup = ref([]);
    const user_param = ref([]);
    const router = useRouter();
    const errors = ref('')

    const getUsersInGroup = async (group) => {
        let response = await axios.get('/api/dashboard/' + group);
        usersInGroup.value = response.data.parameters;
    }

    const getUserGroup = async (id) => {
        let response = await axios.get('/api/groups_user/' + id);
        user_param.value = response.data.parameters;
    }

    const storeGroup = async ( data, group_page ) => {
        errors.value = '';

        try {

            await axios.post('/api/groups_user/', data),
            await router.push( { name: 'Groups', params: { group: group_page } } )
        } catch ( e ) {

            if( e.response.status === 422 ) {

                for ( const key in e.response.data.errors ) {

                    errors.value += e.response.data.errors[ key ][ 0 ] + ''; 
                } 
            }
        }
    }

    const updateUserGroup = async ( id ) => {
        errors.value = '';

        try {

            await axios.put('/api/groups_user/' + id, user_param.value),
            await router.push( { name: 'Users' } )
        } catch ( e ) {

            if( e.response.status === 422 ) {

                for ( const key in e.response.data.errors ) {

                    errors.value += e.response.data.errors[ key ][ 0 ] + ''; 
                } 
            }
        }
    }

    const destroyUserInGroup = async (id) => {
        await axios.delete('/api/groups_user/' + id);
    }

    return {
        usersInGroup,
        errors,
        user_param,
        getUsersInGroup,
        storeGroup,
        getUserGroup,
        updateUserGroup,
        destroyUserInGroup
    }
};