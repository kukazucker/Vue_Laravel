<template>
    <PageComponent title="Trainings: Januar" class_select="components main"> 
        <DisplayDays>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '1' } }">
                <SelectIcon group_id="1" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '2' } }">
                <SelectIcon group_id="2" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '3' } }">
                <SelectIcon group_id="3" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '4' } }">
                <SelectIcon group_id="4" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '5' } }">
                <SelectIcon group_id="5" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '6' } }">
                <SelectIcon group_id="6" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '7' } }">
                <SelectIcon group_id="7" type_select="radio" />
            </router-link>
        </DisplayDays>
        <DisplayDays>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '8' } }">
                <SelectIcon group_id="8" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '9' } }">
                <SelectIcon group_id="9" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '10' } }">
                <SelectIcon group_id="10" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '11' } }">
                <SelectIcon group_id="11" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '12' } }">
                <SelectIcon group_id="12" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '13' } }">
                <SelectIcon group_id="13" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '14' } }">
                <SelectIcon group_id="14" type_select="radio" />
            </router-link>
        </DisplayDays>
        <DisplayDays>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '15' } }">
                <SelectIcon group_id="15" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '16' } }">
                <SelectIcon group_id="16" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '17' } }">
                <SelectIcon group_id="17" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '18' } }">
                <SelectIcon group_id="18" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '19' } }">
                <SelectIcon group_id="19" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '20' } }">
                <SelectIcon group_id="20" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '21' } }">
                <SelectIcon group_id="21" type_select="radio" />
            </router-link>
        </DisplayDays>
        <DisplayDays>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '22' } }">
                <SelectIcon group_id="22" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '23' } }">
                <SelectIcon group_id="23" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '24' } }">
                <SelectIcon group_id="24" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '25' } }">
                <SelectIcon group_id="25" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '26' } }">
                <SelectIcon group_id="26" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '27' } }">
                <SelectIcon group_id="27" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '28' } }">
                <SelectIcon group_id="28" type_select="radio" />
            </router-link>
        </DisplayDays>
        <DisplayDays>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '29' } }">
                <SelectIcon group_id="29" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '30' } }">
                <SelectIcon group_id="30" type_select="radio" />
            </router-link>
            <router-link  :to="{ name: 'TrainingDay', params: { id: '31' } }">
                <SelectIcon group_id="31" type_select="radio" />
            </router-link>
        </DisplayDays>
       <div class="text_select"><h3>Select the day above</h3></div>
    </PageComponent>
</template>

<script>
import PageComponent from '../AppsComponents/PageComponent.vue'
import AreaCheckboxes from '../AppsComponents/AreaCheckboxes.vue'
import SelectIcon from '../AppsComponents/SelectIcon.vue'
import CalendarNumbers from '../AppsComponents/CalendarNumbers.vue'
import DisplayGroups from '../AppsComponents/DisplayGroups.vue'
import ListGroup from '../AppsComponents/ListGroup.vue'
import ListPersonal from '../AppsComponents/ListPersonal.vue'
import DisplayDays from '../AppsComponents/DisplayDays.vue'

export default {
  components: { PageComponent, AreaCheckboxes, SelectIcon, CalendarNumbers, DisplayGroups, ListGroup, ListPersonal, DisplayDays },
    
}
</script>

<style>
    
</style>