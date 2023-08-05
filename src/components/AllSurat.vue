<template>
  <div>
    <div class="container">
      <h3>All Surat</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col-3" v-for="surat in all_surat">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{surat.namaLatin}} ({{surat.arti}})</h5>
              <h3>{{surat.nama}}</h3>
              <p><span class="small text-muted"> Surat ke : {{surat.nomor}} ({{surat.tempatTurun}})</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all_surat: []
    }
  },
  mounted() {
    this.getAllSurat()
  },
  methods: {
    getAllSurat(){
      this.$http.get('https://equran.id/api/v2/surat')
      .then(ress => {
        this.all_surat = ress.data.data
        console.log(this.all_surat)
      })
    }
  },
}
</script>