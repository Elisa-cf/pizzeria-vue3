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
    <GMapMap
      :center="center"
      :options="options"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100vw; height: 20rem"
    >
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </section>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      options: {
        styles: [
          [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#ebe3cd",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#523735",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f1e6",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#c9b2a6",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#dcd2be",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#ae9e90",
                },
              ],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#93817c",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#a5b076",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#447530",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f1e6",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#fdfcf8",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f8c967",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#e9bc62",
                },
              ],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e98d58",
                },
              ],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#db8555",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#806b63",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#8f7d77",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#ebe3cd",
                },
              ],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#b9d3c2",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#92998d",
                },
              ],
            },
          ],
        ],
      },
    };
  },
};
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
