<template>
  <div class="terjual">
    <div class="car-grid">
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
  </div>
</template>

<script>
import db from "./firebaseInit"
export default {
    data(){
        return{
            mobil: []
        }
    },
    beforeMount(){
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
    .car-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 50px;
        column-gap: 46px;
    }
    .grid{
        background-color: white;
        position: relative;
        padding: 14px 23px;
        transition: 0.3s;
    }
    .grid:hover{
        transform: scale(1.02);
    }
    .grid .car-name{
        font-size: 23px;
        font-family: 'Poppins';
        font-weight: 400;
        color: black;
    }
    .date{
        color: rgb(104, 104, 104);
    }
    .grid .image{
        width: 100%;
        margin: 10px 0;
        height: 200px;
        background: gray;
    }
    .detail-grid{
        margin-top: 1em;
        display: grid;
        justify-content: center;
        row-gap: 12px;
        grid-template-columns: repeat(2, 1fr);
    }
    .detail-grid p{
        color: rgb(165, 165, 165);
        font-weight: 300;
        font-family: 'Poppins';
        font-size: 17px;
    }
    p span{
        color: black;
        font-size: 17px;
        font-weight: 500;
    }
    .detail-grid .button{
        padding: 7px 0;
        background-color: #35485c;
        transition: 0.2s;
        cursor: pointer;
        text-align: center;
        grid-area: 3/1/3/3;
        justify-content: center;
        border-radius: 5px;
        font-size: 18px;
        color: white;
        letter-spacing:  0.02em;
    }
    .grid .button:hover{
        background-color: rgb(93, 117, 144);
    }
    .detail-grid div{
        display: flex;
        align-items: center;
        
    }

    @media (max-width: 1000px){
        .car-grid{
        grid-template-columns: repeat(2, 1fr);
    }
    }
</style>