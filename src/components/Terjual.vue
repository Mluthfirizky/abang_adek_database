<template>
  <div class="terjual">
            <div v-if="result.length > 0" class="result">
          <h3>Result</h3>
          <div v-if="result.length > 0" class="car-grid">
        <div v-for="mobil in result" :key="mobil.dataMobil.plat" class="grid">
            <router-link :to="'/view-car/' + mobil.id">
            <div class="date">{{mobil.waktuPenambahan}}</div>
            <img :src="mobil.image" class="image"><img>
            <h1 class="car-name">{{mobil.dataMobil.merk}} {{mobil.dataMobil.type}}, {{mobil.dataMobil.tahun}}</h1>
            <div class="detail-grid">
                <p class="desc">Transmisi: <br><span>{{mobil.dataMobil.transmisi}}</span></p>
                <p class="desc">Atas nama: <br><span>{{mobil.dataMobil.atasNama}}</span></p>
                <div class="button">Detail</div>
            </div>
            </router-link>
        </div>
    </div>

    <div class="line"></div>

      </div>

    <div v-if="mobil.length > 0" class="car-grid">
        <div v-for="mobil in mobil" :key="mobil.dataMobil.plat" class="grid">
            <router-link :to="'/view-car-terjual/' + mobil.id">
            <div class="date">{{mobil.waktuPenambahan}}</div>
            <img :src="mobil.image" class="image"><img>
            <h1 class="car-name">{{mobil.dataMobil.merk}} {{mobil.dataMobil.type}}, {{mobil.dataMobil.tahun}}</h1>
            <div class="detail-grid">
                <p class="desc">Transmisi: <br><span>{{mobil.dataMobil.transmisi}}</span></p>
                <p class="desc">Atas nama: <br><span>{{mobil.dataMobil.atasNama}}</span></p>
                <div class="button">Detail</div>
            </div>
            </router-link>
        </div>
    </div>
        <h1 style="text-align: center; height: 100%; font-weight: 700; font-size: 50px;" v-else>Data Terjual Kosong</h1>
  </div>
</template>

<script>
import db from "./firebaseInit"
export default {
    data(){
        return{
            result: [],
            mobil: []
        }
    },
    beforeMount(){
        setInterval(() => {
            this.result = this.mobil.filter((f) => f.dataMobil.merk == this.$store.getters.search)
        }, 0);
        db.collection('terjual').get()
        .then(querySnapShot => {
            querySnapShot.forEach(doc => {
                console.log(doc.data())
                const data = {
                    'dataMobil': {
                        'plat': doc.data().dataMobil.plat,
                        'atasNama': doc.data().dataMobil.atasNama,
                        'merk': doc.data().dataMobil.merk,
                        'noMesin': doc.data().dataMobil.noMesin,
                        'noRangka': doc.data().dataMobil.noRangka,
                        'pajak': doc.data().dataMobil.pajak,
                        'surat': doc.data().dataMobil.surat,
                        'tahun': doc.data().dataMobil.tahun,
                        'transmisi': doc.data().dataMobil.transmisi,
                        'type': doc.data().dataMobil.type
                    },
                    'dataPenjual': {
                        'nama': doc.data().dataPenjual.nama,
                        'alamat': doc.data().dataPenjual.alamat,
                        'hargaBeli': doc.data().dataPenjual.hargaBeli,
                        'ktp': doc.data().dataPenjual.ktp,
                        'tanggal': doc.data().dataPenjual.tanggal,
                        'telp': doc.data().dataPenjual.telp
                    },
                    'dataPembeli': {
                        'nama': doc.data().dataPembeli.nama,
                        'alamat': doc.data().dataPembeli.alamat,
                        'hargaJual': doc.data().dataPembeli.hargaJual,
                        'ktp': doc.data().dataPembeli.ktp,
                        'tanggal': doc.data().dataPembeli.tanggal,
                        'telp': doc.data().dataPembeli.telp
                    },
                    'image': doc.data().image,
                    'waktuPenambahan': doc.data().waktuPenambahan,
                    'id': doc.id
                }
                this.mobil.push(data)
            })
        }) 
    }
}
</script>

<style>

</style>