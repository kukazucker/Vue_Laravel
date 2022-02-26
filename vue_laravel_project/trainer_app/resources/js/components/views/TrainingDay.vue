<template>
    <PageComponent title="Trainings on " class_select="components main" :extra_title="props.id + ' Januar'"> 

            <div v-for="training in trainings" :key="training.id">
                <PageComponent :title="training.time" class_select="components info">
                <table class="table_container fixed">
                    <thead>
                        <tr>
                            <th>Group</th>
                            <th>Trainer</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td class="text_center">{{training.group}}</td>
                        <td class="text_center">{{training.trainer}}</td>
                        <td class="text_center">
                            <router-link  :to="{ name: 'Groups', params: { group: training.group } }">
                                <InformationCircleIcon class="check"/>
                            </router-link>
                        </td>   
                    </tbody>
                </table>
                </PageComponent>
            </div>
    </PageComponent>
</template>

<script>
import ListGroup from '../AppsComponents/ListGroup.vue'
import ListPersonal from '../AppsComponents/ListPersonal.vue'
import SelectIcon from '../AppsComponents/SelectIcon.vue'
import PageComponent from '../AppsComponents/PageComponent.vue'
import HeaderLinksCalendar from '../AppsComponents/HeaderLinksCalendar.vue'
import useTraining from '../hooks/useTraining'
import { onMounted } from '@vue/runtime-core'
import { InformationCircleIcon } from '@heroicons/vue/outline'

export default {
  components: { ListGroup, ListPersonal, SelectIcon, PageComponent, HeaderLinksCalendar, InformationCircleIcon },

    props: {
        id: {
            type:String,
        }
    },

    setup(props) {

        const { trainings, getTrainings } = useTraining();

        onMounted ( getTrainings( props.id ) );

        return {
            trainings,
            props
        }
    },

    methods: {

        deleteUserInGroup(id) {
            alert(id);
        }
    }
    
}
</script>

<style>

    .components.personal {
        position: relative;
        margin-top: 40px;
        width: 49%;
        min-height:280px;
        top: 10px;
    }

    .components.schedule {
        position: relative;
        width: 95%;
        min-height: 250px;  
    }

    .components.footer {
        position: relative;
        width: 95%;
        margin-top: 100px;
        min-height: 180px;
    }

    .group_select {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: white;
        position: relative;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .component_name {
        position: relative;
        width: 100%;
        height: 50px;
        background: #e5e7ea;
        padding-left: 30px;
        font-size: 30px;
        padding-top: 3px;
        font-weight: bold;
        color: #33363a;
        border: 2px solid #a1a2a3;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

</style>