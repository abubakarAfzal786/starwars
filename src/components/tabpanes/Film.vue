

<template>
  <template v-if="films && films.length">
    <div class="relative">
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10"
      >
        <Card
          @click="(showDrawer = true) && (selectedFilm = item)"
          class="cursor-pointer"
          :class="{
            'border-indigo-500 border rounded-md':
              selectedFilm?.name === item.name,
          }"
          v-for="item in films"
          :key="item.index"
          :internalClass="'p-6 rounded-lg'"
        >
          <div class="flex justify-center">
            <img style="height: 150px" alt="" />
          </div>
          <div class="">
            <p class="text-gray-500 font-medium">
              {{ item.title }}
            </p>
          </div>
        </Card>
        <div class="absolute bottom-16 right-10" @click="showDialog = true">
          <div class="bg-indigo-500 rounded-full pt-1 px-1 cursor-pointer">
            <Icon size="30" color="white">
              <Plus />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="h-full flex flex-col justify-center items-center bg-gray-100">
      <p class="text-2xl font-[1000] body-font font-poppins">
        Space doesn’t have to be so empty.
      </p>

      <img src="@/assets/planetlogo.png" alt="" />
      <div
        @click="showDialog = true"
        class="bg-gray-800 text-white px-3 py-2 rounded-md cursor-pointer my-3"
      >
        Create Planet
      </div>
    </div>
  </template>

  <FilmDetail
    @showModal="showDialog = true"
    v-model="showDrawer"
    :selectedFilm="{
      title: selectedFilm?.title,
      episode_id: selectedFilm?.episode_id,
      director: selectedFilm?.director,
      producer: selectedFilm?.producer,
      release_date: selectedFilm?.release_date,
      opening_crawl: selectedFilm?.opening_crawl,
      length: selectedFilm?.characters.length,
    }"
  />
</template>
<script>
import Card from "@/components/ui/Card.vue";
import { Icon } from "@vicons/utils";
import FilmDetail from "./FilmDetail.vue";
import $axios from "@/plugins/axios.js";
export default {
  components: {
    Card,
    Icon,
    FilmDetail,
  },
  data() {
    return {
      showDialog: false,
      showDrawer: false,
      selectedFilm: null,
      films: [],
    };
  },
  created() {
    $axios
      .get("films")
      .then((response) => {
        this.films = response.data.results.reverse();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
.ball {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    139deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(189, 242, 242, 1) 80%
  );
  background-blend-mode: soft-light;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  transform: rotate(70deg);
}
</style>
