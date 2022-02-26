<template>
    <table class="table_container">
        <thead>
            <tr>
                <th>id</th>
                <th>Surname</th>
                <th>Name</th>
                <th>Data</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Change</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script setup>
import DisplayUsers from './DisplayUsers.vue'



</script>

<style>

.table_container thead tr {
    background: #4b5563;
    height: 60px;
    text-align: center;
}

.table_container thead th {
    color: white;
    border-left: 2px solid #a1a2a3;
}

.table_container th,
.table_container td {
    padding: 12px;
    border-left: 2px solid #a1a2a3;
}

.table_container.fixed th,
.table_container.fixed td {
    padding: 12px;
    border-left: 2px solid #a1a2a3;
    width: 25%;
}

.table_container tbody tr:nth-of-type(even) {
    border-top: 2px solid #a1a2a3;
    border-bottom: 2px solid #a1a2a3;
    background-color: #e5e7ea;
    color: white;
}

.table_container tbody tr:last-of-type {
    border-bottom: none;
}

</style>
