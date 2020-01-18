<template>
  <div>
    <div v-if="loading == true ">Data is Loading...</div>
    <div v-else>
      <div class="row mb-4 " v-for="row in rows" :key="'row'+row">
        <div
          class="col"
          v-for="(bookable, columns) in bookablesInRow(row)"
          :key="'row' + row + columns"
        >
          <bookable-list-item
            v-bind:item-title="bookable.title"
            :item-content="bookable.content"
            v-bind:item-price="150"
          ></bookable-list-item>
        </div>
        <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder'+ row + p"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem: BookableListItem
  },
  data() {
    return {
      bookable_list: null,
      loading: false,
      columns: 3
    };
  },

  computed: {
    rows() {
      return this.bookable_list == null
        ? 0
        : Math.ceil(this.bookable_list.length / this.columns);
    }
  },

  methods: {
      bookablesInRow(row){
          return this.bookable_list.slice((row-1)*this.columns, row*this.columns);
      },
      placeholdersInRow(row){
          return this.columns - this.bookablesInRow(row).length;
      }
  },

  created() {
    this.loading = true;

    setTimeout(() => {
      console.log(" Yes it is running");
      this.bookable_list = [
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        },
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        },
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        },
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        },
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        },
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        },
        {
          title: "Cheap Villa !!!",
          content: "A very Cheap Villa"
        }
      ];

      this.loading = false;
    }, 2000);
  }
};
</script>