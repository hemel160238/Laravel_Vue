<template>

    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ItemTitle}}</h5>
            <p class="card-text">{{ItemContent}}</p>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        ItemTitle: String,
        ItemContent: String,
        ItemPrice: Number
    }
};
</script>