<template>
    <div>
        <h1>{{ItemTitle}}</h1>
        <h2>{{ItemPrice}}</h2>
        <p>{{ItemContent}}</p>

    </div>
</template>

<script>
export default {

    props: {
        ItemTitle: String,
        ItemContent: String,
        ItemPrice: Number
    }
}
</script>