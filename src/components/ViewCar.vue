<template>
  <div v-loading="loading" class="car">
    <div v-if="currentData">
      <router-link to="/">
        <div class="back">
          <span class="material-icons"> keyboard_backspace </span>
          <div>Back</div>
        </div>
      </router-link>

      <div class="mobil-data">
        <div class="top">
          <h1 class="nama">
            {{ currentData.dataMobil.merk }}, {{ currentData.dataMobil.type }}
          </h1>
        </div>

        <div class="info">
          <ul>
            <li
              v-if="index != 'merk' && index != 'type'"
              v-for="(info, index) in currentData.dataMobil"
              :key="info"
            >
              {{
                index
                  .replace("noRangka", "No.rangka")
                  .replace("noMesin", "No.mesin")
                  .replace("atasNama", "Atas nama")
                  .replace("surat", "surat-surat")
              }}: 

              <span v-if="index != 'surat'">{{ info }}</span>
              <a target="_" :href="currentData.dataMobil.surat">
              <el-button class="view-btn" v-if="index == 'surat'" type="primary" plain>View</el-button>
              </a>
              <!-- <img class="ktpImage" v-if="index == 'surat' && currentData.dataMobil.surat != null" :src="currentData.dataMobil.surat" alt="">
              <h3 v-if="index == 'ktp' && currentData.dataMobil.surat == null">Gambar tidak tersedia</h3> -->

            </li>
          </ul>
        </div>
        <div :style="imageViewer()" class="image"></div>
      </div>
      <div class="flex-data">
        <div class="data-penjual">
          <div class="top">
            <h1>Penjual</h1>
          </div>
          <ul>
            <li
               :class="index == 'ktp' ? 'imageColumn' : ''"
              v-if="index != 'tanggal'"
              v-for="(penjual, index) in currentData.dataPenjual"
              :key="index"
            >
              {{ index.replace("hargaBeli", "Harga beli") }}:
              <span v-if="index != 'ktp'">{{ penjual }}</span>
              <a target="_" :href="currentData.dataPenjual.ktp">
              <img class="ktpImage" v-if="index == 'ktp' && currentData.dataPenjual.ktp != null" :src="currentData.dataPenjual.ktp" alt="">
              </a>
              <h3 v-if="index == 'ktp' && currentData.dataPenjual.ktp == null">Gambar tidak tersedia</h3>
            </li>
            <li>
              tanggal: <span>{{currentData.dataPenjual.tanggal.toDate().toDateString()}}</span>
            </li>
          </ul>
        </div>

        <div class="data-penjual">
          <div class="top">
            <h1>Pembeli</h1>
          </div>
          <ul>
            <li
            :class="index == 'ktp' ? 'imageColumn' : ''"
              v-if="index != 'tanggal'"
              v-for="(pembeli, index) in currentData.dataPembeli"
              :key="index"
            >
              {{ index.replace("hargaJual", "Harga jual") }}:
               <span v-if="index != 'ktp'">{{ pembeli }}</span>
               <a target="_" :href="currentData.dataPembeli.ktp">
              <img class="ktpImage" v-if="index == 'ktp' && currentData.dataPembeli.ktp != null" :src="currentData.dataPembeli.ktp" alt="">
               </a>
              <h3 v-if="index == 'ktp' && currentData.dataPembeli.ktp == null">Gambar tidak tersedia</h3>
            </li>
            <li>
              tanggal: <span>{{currentData.dataPembeli.tanggal.toDate().toDateString()}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="button-group">
        <div class="untung">
          <div class="top"><h1>Untung/Rugi</h1></div>
          <p
            v-if="
              parseFloat(currentData.dataPembeli.hargaJual) -
                parseFloat(currentData.dataPenjual.hargaBeli) >=
              0
            "
          >
            Untung: Rp.<span>
              {{
                parseFloat(currentData.dataPembeli.hargaJual) -
                parseFloat(currentData.dataPenjual.hargaBeli)
              }}</span
            >
          </p>
          <p v-else>
            Rugi: Rp.<span>
              {{
                parseFloat(currentData.dataPembeli.hargaJual) -
                parseFloat(currentData.dataPenjual.hargaBeli)
              }}</span
            >
          </p>
        </div>
        <div class="button-3">
          <el-button @click="editData" type="warning" plain>Edit</el-button>
          <el-button @click="deleteData" type="danger" plain>Delete</el-button>
          <el-button v-if="collection == 'mobil'" class="terjual" @click="terjualData" type="success" plain
            >Terjual</el-button
          >
        </div>
      </div>
    </div>
    <!-- <button @click="deleteData">Delete</button> -->
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  data() {
    return {
      month: [
        "januari",
        "februari",
        "maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      currentData: null,
      time: new Date(),
      loading: false,
    };
  },
  props: {
    collection: {
      type: String
    }
  },
  beforeMount() {
    db.collection(this.collection)
      .doc(this.$route.params.plat)
      .get()
      .then((querySnapShot) => {
          console.log(querySnapShot.data());
          this.currentData = querySnapShot.data();
      });
  },
  //berjalan sebelum berganti route
  // beforeRouteEnter(to, from, next) {
  //   db.collection(this.collection)
  //     .doc(to.params.plat)
  //     .get()
  //     .then((querySnapShot) => {
  //       next((vm) => {
  //         console.log(querySnapShot.data());
  //         vm.currentData = querySnapShot.data();
  //       });
  //     });
  // },
  methods: {
    terjualData() {
      this.$confirm("Pindahkan ke data Terjual?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          db.collection("terjual")
            .add({
              dataMobil: this.currentData.dataMobil,
              dataPenjual: this.currentData.dataPenjual,
              dataPembeli: this.currentData.dataPembeli,
              image: this.currentData.image,
              waktuPenambahan: `${this.time.getDate()} ${
                this.month[this.time.getMonth()]
              }, ${this.time.getFullYear()}`,
            }).then(() => {
              db.collection("mobil")
                .doc(this.$route.params.plat)
                .get()
                .then((querySnapShot) => {
                  querySnapShot.ref.delete();
                  this.$router.go(-1);
                });
            })
          this.$message({
            type: "success",
            message: "Berhasil di pindahkan",
          });
        })
        .catch((error) => {
          console.log(error)
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
    deleteData() {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          db.collection(this.collection)
            .doc(this.$route.params.plat)
            .get()
            .then((querySnapShot) => {
              querySnapShot.ref.delete();
              this.$router.go(-1);
            });
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
    editData() {
      this.$router.push("/edit/" + this.$route.params.plat);
    },
    imageViewer() {
      return {
        "background-image": `url(${this.currentData.image})`,
      };
    },
    displayNone() {
      return {
        display: "none",
      };
    },
  },
};
</script>

<style>
.car {
  position: relative;
  padding: 20px 50px;
  font-family: "Poppins", sans-serif;
}
.back {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  gap: 30px;
  color: black;
}
.mobil-data {
  background: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 35px;
}
.mobil-data .top {
  position: absolute;
  width: 100%;
  color: white;
  font-size: 1.2em;
  display: flex;
  background: #333333;
  align-items: center;
  padding: 20px 40px;
}
.mobil-data .info {
  padding: 120px 0 10px 40px;
  flex: 1;
}
.mobil-data .info ul {
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
}
.car ul span {
  font-weight: 300;
}
.data-penjual ul {
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
}
.data-penjual ul {
  padding: 30px 30px;
}
.untung p {
  padding: 30px 30px;
  background: white;
  font-size: 20px;
  font-weight: 500;
}
.untung p span {
  font-weight: 300;
}
.data-penjual {
  background: white;
}
.top {
  width: 100%;
  color: white;
  font-size: 1.2em;
  display: flex;
  background: #333333;
  align-items: center;
  padding: 20px 40px;
}
.flex-data {
  display: flex;
  gap: 40px;
}
.imageColumn{
  display: flex;
  flex-direction: column;
}
.ktpImage{
  width: 250px;
  height: 170px;
  margin-top: 10px;
}
.flex-data div {
  flex: 1;
}
.mobil-data .image {
  position: relative;
  flex: 2;
  background-position: center;
  height: 567px;
  z-index: 2;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
  width: 700.11px;
  background-repeat: no-repeat;
  background-size: cover;
}
.car .button-group {
  margin-top: 30px;
  gap: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.button-group div {
  flex: 1;
}
.button-group .button-3 button {
  font-size: 16px;
  margin: 0;
}
.button-3 {
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
}
.button-3 .terjual {
  grid-area: 2 / 1 / 3 / 3;
}
.car .view-btn{
  padding: 10px 30px;
}
</style>
