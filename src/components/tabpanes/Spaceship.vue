

<template>
  <template v-if="starships">
    <div class="relative">
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10"
      >
        <Card
          @click="(showDrawer = true) && (selectedSpaceship = item)"
          class="cursor-pointer min-w-fit"
          v-for="item in starships"
          :key="item"
          :internalClass="'rounded-xl'"
        >
          <div class="flex justify-center">
            <div class="image"></div>
          </div>
          <div class="px-6">
            <p class="text-gray-500 font-medium">
              {{ item.name }}
            </p>
            <p class="text-gray-400">
              {{ item.name }}
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
        Characters doesn’t have to be so empty.
      </p>

      <img src="@/assets/spaceship.jpeg" alt="" />
      <div
        @click="showDialog = true"
        class="bg-gray-800 text-white px-3 py-2 rounded-md cursor-pointer my-3"
      >
        Create Character
      </div>
    </div>
  </template>

  <SpaceshipDetail
    @showModal="showDialog = true"
    v-model="showDrawer"
    :selectedSpaceship="{
      name: selectedSpaceship?.name,
      manufacturer: selectedSpaceship?.manufacturer,
      passengers: selectedSpaceship?.passengers,
      starship_class: selectedSpaceship?.starship_class,
      consumables: selectedSpaceship?.consumables,
      model: selectedSpaceship?.model,
      cost_in_credits: selectedSpaceship?.cost_in_credits,
    }"
    :friends="friends"
  />
</template>
<script>
import Card from "@/components/ui/Card.vue";
import { Icon } from "@vicons/utils";
import { Plus } from "@vicons/tabler";
import SpaceshipDetail from "./SpaceshipDetail.vue";
import $axios from "@/plugins/axios.js";

export default {
  components: {
    Card,
    Icon,
    Plus,
    SpaceshipDetail,
  },
  data() {
    return {
      showDialog: false,
      showDrawer: false,
      selectedSpaceship: null,
      starships: [],
    };
  },
  created() {
    $axios
      .get("/starships")
      .then((response) => {
        this.starships = response.data.results.reverse();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
.image {
  background-image: url("@/assets/spaceship.jpeg");
  width: 100%;
  height: 150px;
  border-radius: 20px 20px 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
