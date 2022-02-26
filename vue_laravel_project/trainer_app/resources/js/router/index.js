import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../components/views/Dashboard'
import Calendar from '../components/views/Calendar'
import Announcements from '../components/views/Announcements'
import Users from '../components/views/Users'
import CreateForm from '../components/views/CreateForm'
import EditForm from '../components/views/EditForm'
import Groups from '../components/views/Groups'
import DefaultLayout from '../components/AppsComponents/DefaultLayout'
import CreateGroup from '../components/views/CreateGroup'
import TrainingDay from '../components/views/TrainingDay'

const routes = [
    {
        path: '/',
        name: 'dafaultView',
        redirect: '/dashboard',
        component: DefaultLayout,
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard },
            {path: '/dashboard/groups/:group', name: 'Groups', component: Groups, props: true },
            {path: '/dashboard/group/add_user/:group', name: 'CreateGroup', component: CreateGroup, props: true },
            {path: '/calendar', name: 'Calendar', component: Calendar },
            {path: '/calendar/:id', name: 'TrainingDay', component: TrainingDay, props: true },
            {path: '/announcements', name: 'Announcements', component: Announcements },
            {path: '/users', name: 'Users', component: Users },
            {path: '/users/create', name: 'CreateForm', component: CreateForm },
            {path: '/users/:id/edit', name: 'EditForm', component: EditForm, props: true },
        ]
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
});