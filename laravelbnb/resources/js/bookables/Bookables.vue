<template>
    <div>
        <bookable-list-item item-title="Cheap Villa" item-content="A very Cheap Villa" v-bind:item-price="150"></bookable-list-item>
        <bookable-list-item item-title="Cheap Villa 2 " item-content="A very Cheap Villa 2" v-bind:item-price="250"></bookable-list-item>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem"
export default {
    components: {
        BookableListItem: BookableListItem
         
    }
}
</script>