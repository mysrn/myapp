<template>
  <div class="">
    <h3>
      Surat {{data_surat.namaLatin}} - {{data_surat.nama}}
      <span class="smaal text-muted">({{data_surat.arti}})</span>
    </h3>
    <span class="small text-muted">
      Tempat turun surat : {{data_surat.tempatTurun}}
    </span>,
    <span class="small text-muted">
      Jumlah ayat : {{data_surat.jumlahAyat}}</span>,
    <span class="small text-muted">
      Nomor surat : {{data_surat.nomor}}
    </span>
    <div v-html="data_surat.deskripsi"></div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4 mt-1">
      <div class="col-12 col-sm-6 col-lg-3" 
        v-for="(audio, i) in data_surat.audioFull"
        :key="i">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="bi bi-music-note"></i>
              {{i}} :&nbsp;
              <i class="bi bi-music-player">&nbsp;{{audio.substring(43)}}</i>
              <audio controls style="width: 100%;">
                <source :src="audio" type="audio/mpeg">
              </audio>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card mt-1">
      <div class="card-body">
        <blockquote class="blockquote mb-0" v-for="ayat in data_surat.ayat">
          <div>
            <p class="small text-muted">Ayat ke {{ayat.nomorAyat}}</p>
            <p class="text-end"><span>{{ayat.teksArab}}</span></p>
          </div>
          <footer class="small text-muted footer">{{ayat.teksLatin}}<br>
            <cite title="Source Title">{{ayat.teksIndonesia}}</cite>
          </footer>
          <hr>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['data_surat'],
    data() {
      return {
        isModalOpen: false,
        audioUrl: ''
      }
    },
  }
</script>