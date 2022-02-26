<template>
    <PageComponent title="Announcements" class_select="components main">
      <PageComponent title="Groups" class_select="components info">
        <span class="info_text" aria-rowcount="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat et odio at convallis. Vivamus elementum, lacus sit amet aliquam laoreet, libero nisi blandit lorem, sit amet auctor odio risus ac justo. In elementum varius magna, 
          sit amet scelerisque sem commodo quis. Etiam eu dolor sodales, blandit ex vel, faucibus tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id purus ut dolor auctor efficitur. 
          In feugiat, augue sit amet tempus rutrum, metus libero bibendum massa, nec scelerisque erat tellus vel leo. Proin tempor lectus tincidunt justo iaculis, at varius ligula suscipit. Fusce viverra, risus eget aliquam feugiat, 
          metus erat auctor mauris, eu accumsan urna magna placerat risus. Donec eu molestie leo.
        </span>
      </PageComponent>
      <PageComponent title="Trainings" class_select="components info">
        <span class="info_text" aria-rowcount="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat et odio at convallis. Vivamus elementum, lacus sit amet aliquam laoreet, libero nisi blandit lorem, sit amet auctor odio risus ac justo. In elementum varius magna, 
          sit amet scelerisque sem commodo quis. Etiam eu dolor sodales, blandit ex vel, faucibus tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id purus ut dolor auctor efficitur. 
          In feugiat, augue sit amet tempus rutrum, metus libero bibendum massa, nec scelerisque erat tellus vel leo. Proin tempor lectus tincidunt justo iaculis, at varius ligula suscipit. Fusce viverra, risus eget aliquam feugiat, 
          metus erat auctor mauris, eu accumsan urna magna placerat risus. Donec eu molestie leo.
        </span>
      </PageComponent>
      <PageComponent title="Trainers" class_select="components info">
        <span class="info_text" aria-rowcount="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat et odio at convallis. Vivamus elementum, lacus sit amet aliquam laoreet, libero nisi blandit lorem, sit amet auctor odio risus ac justo. In elementum varius magna, 
          sit amet scelerisque sem commodo quis. Etiam eu dolor sodales, blandit ex vel, faucibus tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id purus ut dolor auctor efficitur. 
          In feugiat, augue sit amet tempus rutrum, metus libero bibendum massa, nec scelerisque erat tellus vel leo. Proin tempor lectus tincidunt justo iaculis, at varius ligula suscipit. Fusce viverra, risus eget aliquam feugiat, 
          metus erat auctor mauris, eu accumsan urna magna placerat risus. Donec eu molestie leo.
        </span>
      </PageComponent>
    </PageComponent>
</template>

<script>
import PageComponent from '../AppsComponents/PageComponent.vue'
export default {
  components: { PageComponent },
    
}
</script>

<style>

.info_text {

  position: relative;
  width: 96%;
  margin-left: 2%;
  height: 90px;
  padding: 10px;
  bottom: 5px;
  display: inline-block;
}

.place {

  position: relative;
  margin-bottom: 12px;
}
    
</style>