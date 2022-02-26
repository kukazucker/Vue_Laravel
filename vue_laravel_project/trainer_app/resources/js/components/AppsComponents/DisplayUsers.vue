<template>
    <tr v-for="user in users" :key="user.id">
        <td class="text_center">{{ user.id }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.birth_day }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td class="special_box">
            <router-link  :to="{ name: 'EditForm', params: { id: user.id } }"><InformationCircleIcon class="check" /></router-link>
            <div><TrashIcon class="check" @click="deleteUser(user.id)"/></div>
        </td>
    </tr>
</template>

<script>
import useUsers from '../hooks/useUsers'
import { onMounted } from 'vue'

import { InformationCircleIcon, TrashIcon } from '@heroicons/vue/outline'

export default {

    components: {
        InformationCircleIcon, TrashIcon
    },

    setup() {

        const { users, getUsers, destroyUser } = useUsers();

        onMounted( getUsers );

        const deleteUser = async (id) => {
            if(!window.confirm('Are you sure?')) {
                return;
            }
            await destroyUser(id);
            await getUsers();
        }
        

        return {
            users,
            deleteUser,
        }

    },
}
    
</script>

<style>

</style>
