<template>
  <div id="app">
    <head>
      <link href='http://cdn.repository.webfont.com/webfonts/nomal/154803/45871/667b5f29a75bea1ff82c53f2.css' rel='stylesheet' type='text/css' />
    </head>
    
    <h1 class="css3ef715032f25cb3">本研 AI2001 毕业季电子相册</h1>
    <Waterfall :list="paginatedList" :width="300" :gutter="10">
      <template #item="{ item, url, index }">
        <div class="card" @click="openLightbox((currentPage - 1) * itemsPerPage + index)">
          <img v-lazy="url" />
          <!-- <p class="text">{{ item.alt }}</p> -->
        </div>
      </template>
    </Waterfall>
    <light-box
      ref="lightbox"
      :media="media"
      :show-caption="true"
      :show-light-box="false"
      :site-loading="siteLoading"
      @close="lightboxVisible = false"
    />
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox';
require('vue-image-lightbox/dist/vue-image-lightbox.min.css');
import siteLoading from '@/assets/siteloading.gif';

export default {
  components: {
    LightBox,
    siteLoading
  },
  data() {
    return {
      list: [
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-2.jpeg'), alt: 'Photo 1' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-3.jpeg'), alt: 'Photo 2' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-4.jpeg'), alt: 'Photo 3' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-5.jpeg'), alt: 'Photo 4' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-6.jpeg'), alt: 'Photo 5' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-7.jpeg'), alt: 'Photo 6' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-8.jpeg'), alt: 'Photo 7' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-9.jpeg'), alt: 'Photo 8' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-10.jpeg'), alt: 'Photo 9' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-11.jpeg'), alt: 'Photo 10' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-12.jpeg'), alt: 'Photo 11' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-13.jpeg'), alt: 'Photo 12' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-14.jpeg'), alt: 'Photo 13' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-15.jpeg'), alt: 'Photo 14' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-16.jpeg'), alt: 'Photo 15' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-17.jpeg'), alt: 'Photo 16' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-18.jpeg'), alt: 'Photo 17' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-19.jpeg'), alt: 'Photo 18' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-20.jpeg'), alt: 'Photo 19' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-21.jpeg'), alt: 'Photo 20' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-22.jpeg'), alt: 'Photo 21' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-23.jpeg'), alt: 'Photo 22' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-24.jpeg'), alt: 'Photo 23' },
        { src: require('@/assets/合照精修24/计算机本研 崔跃钟摄-25.jpeg'), alt: 'Photo 24' },
      ],
      lightboxVisible: false,
      currentIndex: 0,
      siteLoading: siteLoading,
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    paginatedList() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.list.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.list.length / this.itemsPerPage);
    },
    media() {
      return this.list.map(item => ({
        thumb: item.src,
        src: item.src,
        caption: item.alt
      }));
    }
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.$refs.lightbox.showImage(index);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  mounted() {
    document.title = "电子相册";
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family: 'Arial', sans-serif;
  /* background-color: #f9f9f9; */
  padding: 20px;
}

h1 {
  font-size: 30px;
  margin: 10px 0;
}

.card {
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  cursor: pointer;
}

.card img {
  width: 100%;
  display: block;
  border-bottom: 1px solid #eee;
}

.card .text {
  padding: 10px;
  font-size: 14px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.pagination button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 16px;
  color: #333;
}
</style>

