<template>
    <table class="table_container">
        <thead>
            <tr>
                <th>id</th>
                <th>Surname</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <display-personal></display-personal>
        </tbody>
    </table>
</template>

<script setup>
import DisplayPersonal from './DisplayPersonal.vue'

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

</style>
