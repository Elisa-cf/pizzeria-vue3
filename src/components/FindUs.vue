<template>
  <section class="main-wrapper">
    <article class="find-us">
      <div>
        <h3>Find us</h3>
        <hr />
      </div>
      <h2>opening hours</h2>
      <h5>Monday to Friday: 13pm - 23:30pm</h5>
    </article>
    <GoogleMap
      api-key="AIzaSyAagIVG4qFUjtBCyUtwPm0JKe4covbgeKI"
      style="width: 100%; height: 350px"
      :center="center"
      :zoom="10"
      ><Marker :options="markerOptions">
        <InfoWindow>
          <div id="contet">
            <div id="siteNotice"></div>
            <h4 id="firstHeading" class="firstHeading">
              <a href="https://pizzeria-grande.netlify.app/">
                Pizzeria Grande
              </a>
            </h4>
            <div id="bodyContent">
              <h6>Prielmayerstraße 5, 80335 Munich</h6>
              <h6>+49 895 529 5867</h6>
            </div>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 48.14066, lng: 11.56303 };
    const markerOptions = {
      position: center,
      //label: "Pizza",
      //title: "Grande",
      //icon: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    };

    return { center, markerOptions };
  },
});
</script>

<style scoped>
.main-wrapper {
  width: min(100%, 1000px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
@media screen and (min-width: 800px) {
  .main-wrapper {
    flex-direction: row;
    justify-content: space-between;
    width: min(80%, 1000px);
    margin: 4rem auto;
    gap: 5rem;
  }
}
.find-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  text-transform: capitalize;
}
h3 {
  margin-bottom: 0.1rem;
  font-size: 2rem;
  text-transform: capitalize;
}
hr {
  width: 5rem;
  height: 0.2rem;
  background: #ffc500;
  border-style: none;
  margin-bottom: 1.3rem;
}
h5 {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  text-transform: capitalize;
}
hr {
  width: 7rem;
}
</style>
