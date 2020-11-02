<template>
  <v-cotianer>
    <div>Welcome to TOP UP Store shop</div>
    <v-carousel>
      <v-carousel-item
        v-for="(pic, i) in pics"
        :key="i"
        :src="pic.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        cycle
      ></v-carousel-item>
    </v-carousel>
  </v-cotianer>
</template>
<script>
export default {
  data() {
    return {
      pics: [
        {
          src:
            'https://uknow.in.th/wp-content/uploads/2020/04/Riot-Games-Valorant.jpg',
        },
        {
          src:
            'https://www.siamvivo.com/photoThumbnail/knowledges/007/007_4.jpg',
        },
        {
          src:
            'https://www.pea.co.th/Portals/0/EasyDNNNews/134253/800600p542EDNmain4DCB829A-ECE1-47A5-A9D7-ECAF00650C72.jpeg',
        },
        {
          src:
            'https://gnews.apps.go.th/static/article/28/27451_5ba8611fe66dc.jpg',
        },
      ],
    }
  },
}
</script>
