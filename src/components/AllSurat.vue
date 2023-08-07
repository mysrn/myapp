<template>
  <div>
    <div class="container">
      <div class="fixed-top p-3 text-end" v-if="is_surat_detail">
        <h3>
          <button @click="getAllSurat()" class="border-0 rounded">
            <span class="small text-muted">Back to all surat</span>
          </button>
        </h3>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4" v-if="!is_surat_detail">
        <div class="col" v-for="surat in all_surat">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{surat.namaLatin}} ({{surat.arti}})</h5>
              <h3>{{surat.nama}}</h3>
                <p>
                  <span class="small text-muted">
                    Surat ke : {{surat.nomor}} ({{surat.tempatTurun}})
                  </span>&nbsp;&nbsp;
                  <button 
                    class="border-0 rounded"
                    @click="detailSurat(surat.nomor)" >
                    detail
                  </button>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SuratDetail 
      v-if="is_surat_detail" 
      :data_surat="surat_detail"/>
  </div>
</template>

<script>
  import SuratDetail from './SuratDetail.vue'
  export default {
    components:{SuratDetail},
    data() {
      return {
        all_surat: [],
        surat_detail: [],
        is_surat_detail: false
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
          this.is_surat_detail = false
        })
      },
      detailSurat(data){
        this.$http.get(`https://equran.id/api/v2/surat/${data}`)
        .then(ress =>{
          this.surat_detail = ress.data.data
          this.is_surat_detail = true
        })
      }
    },
  }
</script>