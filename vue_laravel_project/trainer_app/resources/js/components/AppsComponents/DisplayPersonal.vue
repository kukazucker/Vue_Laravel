<template>
    <tr v-for="parameter in personals" :key="parameter.id">
        <td class="text_center">{{ parameter.id }}</td>
        <td>{{ parameter.last_name }}</td>
        <td>{{ parameter.first_name }}</td>
        <td>{{ parameter.phone }}</td>
        <td>{{ parameter.email }}</td>
    </tr>
</template>

<script>
import usePersonals from '../hooks/usePersonals'
import { onMounted } from 'vue'
import { InformationCircleIcon } from '@heroicons/vue/outline'

export default {

    components: {
        InformationCircleIcon
    },

    setup() {

        const { personals, getPersonals } = usePersonals();

        onMounted( getPersonals );

        return {
            personals,
            getPersonals
        }
    },

};
    
</script>

<style>

    .check {
        width: 20px;
        height: 20px;
        color: #4b5563;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .check_small {
        width: 20px;
        height: 20px;
        position: relative;
        color: #4b5563;
        background-color: inherit;
        border: none;
    }
    
    .special_box {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    user-select: none;
}

.checkbox+label::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #adb5bd;
    border-radius: 2px;
    margin-top: 7px;
    background-position: center center;
}
.checkbox:checked+label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
}

</style>
