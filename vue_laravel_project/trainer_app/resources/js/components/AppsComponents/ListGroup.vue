<template>
    <table class="table_container">
        <thead>
            <tr>
                <th>id</th>
                <th>Surname</th>
                <th>Name</th>
                <th>Level</th>
                <th>Data</th>
                <th>accompanied</th>
                <th>Deseable</th>
                <th>Change</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in usersInGroup" :key="user.id">
                <td class="text_center">{{ user.usr_param.id }}</td>
                <td>{{ user.usr_param.last_name }}</td>
                <td>{{ user.usr_param.first_name }}</td>
                <td class="text_center">{{ user.user_level }}</td>
                <td>{{ user.usr_param.birth_day }}</td>
                <td class="text_center">{{ user.accompanied }}</td>
                <td class="text_center">{{ user.invalid }}</td>
                <td class="special_box">
                <router-link :to="{ name: 'EditForm', params: { id: user.user_id } }"><InformationCircleIcon class="check" /></router-link>
                <div><UserRemoveIcon class="check" @click="deleteUserInGroup( user.id )"/></div>
                </td>   
            </tr>
        </tbody>
    </table>
</template>

<script>
import useParameters from '../hooks/useParameters'
import { onMounted } from 'vue'
import { CheckIcon, UserRemoveIcon, InformationCircleIcon } from '@heroicons/vue/outline'

export default {

    components: {
        CheckIcon, UserRemoveIcon, InformationCircleIcon
    },

    props: {
        group: {
            type: String,
        }
    },

    setup(props) {

        const { usersInGroup, getUsersInGroup, destroyUserInGroup } = useParameters();

        onMounted( getUsersInGroup(props.group) );

        const deleteUserInGroup = async (id) => {

            if(!window.confirm('Are you sure?')) {
                return;
            }
            
            await destroyUserInGroup(id);
            await getUsersInGroup(props.group);
        }

        return {
            usersInGroup,
            deleteUserInGroup

        }
    },

}
</script>

<style>

.table_container {
    border-collapse: collapse;
    font-size: 15px;
    min-width: 100%;
    overflow: hidden;
    text-align: left;
}

.table_container thead tr {
    background: #4b5563;
    height: 40px;
}

.table_container thead th {
    color: white;
}

.table_container tbody tr:last-of-type {
    border: none;
}

.table_container tbody tr:nth-of-type(even) {
    background-color: #dededf;
    color: white;
}

.table_container td:first-of-type,
.table_container th:first-of-type {
    border-left: none;
}

.text_center {
    text-align: center;
}

</style>
