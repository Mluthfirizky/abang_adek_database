<template>
  <div class="edit" v-if="currentData">
    <el-form
      :model="currentData.dataMobil"
      :rules="rules"
      ref="dataMobil"
      label-position="top"
      label-width="100px"
    >
      <el-row class="wrapper">
        <h1 class="title">Data Mobil</h1>
        <el-row>
          <el-form-item prop="plat" label="Plat Nomor">
            <el-input
              placeholder="Plat nomor"
              v-model="currentData.dataMobil.plat"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row :gutter="30" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <el-form-item prop="an" label="Atas Nama">
              <el-input
                placeholder="Atas nama"
                v-model="currentData.dataMobil.atasNama"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="nom" label="Nomor Mesin">
              <el-input
                placeholder="Nomor mesin"
                v-model="currentData.dataMobil.noMesin"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="nor" label="Nomor Rangka">
              <el-input
                placeholder="Nomor rangka"
                title="testiong"
                v-model="currentData.dataMobil.noRangka"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <el-form-item prop="pajak" label="Pajak">
              <el-input
                placeholder="Pajak"
                v-model="currentData.dataMobil.pajak"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="surat" label="surat-surat">
        <div class="upload formUpload">
          <el-button class="" @click="onPickFile('suratImage')" type="primary"
            >Upload<i class="el-icon-upload el-icon-right"></i
          ></el-button>
          <div>
            <img v-if="currentData.dataMobil.surat" :src="currentData.dataMobil.surat" alt="" class="preview" />
            <h3 v-if="currentData.dataMobil.surat"></h3>
          </div>
          <h1 @click="cancel('currentData','dataMobil', 'surat')" class="cancel" v-if="currentData.dataMobil.surat">X</h1>
        </div>
        </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="tahun" label="Tahun">
              <el-input
                placeholder="Tahun"
                v-model="currentData.dataMobil.tahun"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <el-form-item prop="merk" label="Merk">
              <el-input
                placeholder="Merk"
                v-model="currentData.dataMobil.merk"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="type" label="Tipe">
              <el-input
                placeholder="Tipe"
                v-model="currentData.dataMobil.type"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="transmisi" label="Transmisi">
              <el-select
                style="width: 100%"
                v-model="currentData.dataMobil.transmisi"
                placeholder="Transmisi"
              >
                <el-option label="Matic" value="Matic"></el-option>
                <el-option label="Manual" value="Manual"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-row>

      <el-row class="wrapper">
        <el-form
          :model="currentData.dataPenjual"
          :rules="rules"
          ref="dataPenjual"
          label-position="top"
          label-width="100px"
        >
          <h1 class="title">Data Penjual</h1>
          <el-row :gutter="30" type="flex" class="row-bg" justify="center">
            <el-col :span="12">
              <el-form-item prop="nama" label="Nama">
                <el-input
                  placeholder="Nama"
                  v-model="currentData.dataPenjual.nama"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="alamat" label="Alamat">
                <el-input
                  placeholder="Alamat"
                  v-model="currentData.dataPenjual.alamat"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="telp" label="Telpon">
                <el-input
                  placeholder="Telpon"
                  v-model="currentData.dataPenjual.telp"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30" type="flex" class="row-bg" justify="center">
            <el-col :span="12">
              <el-form-item prop="ktp" label="KTP">
                  <div class="upload formUpload">
                    <el-button @click="onPickFile('ktpPenjual')" type="primary"
                      >Upload<i class="el-icon-upload el-icon-right"></i
                    ></el-button>
                    <div>
                      <img v-if="currentData.dataPenjual.ktp" :src="currentData.dataPenjual.ktp" alt="" class="preview" />
                    </div>
                    <h1 @click="cancel('currentData','dataPenjual','ktp')" class="cancel" v-if="currentData.dataPenjual.ktp">X</h1>
                  </div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="tgl" label="Tanggal">
                <el-date-picker
                  type="date"
                  placeholder="Tanggal Beli"
                  v-model="currentData.dataPenjual.tanggal"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="harga" label="Harga">
                <el-input
                  placeholder="Harga beli"
                  v-model="currentData.dataPenjual.hargaBeli"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>

      <el-row class="wrapper">
        <el-form
          :model="currentData.dataPembeli"
          :rules="rules"
          ref="dataPembeli"
          label-position="top"
          label-width="100px"
        >
          <h1 class="title">Data Pembeli</h1>
          <el-row :gutter="30" type="flex" class="row-bg" justify="center">
            <el-col :span="12">
              <el-form-item prop="nama" label="Nama">
                <el-input
                  placeholder="Nama"
                  v-model="currentData.dataPembeli.nama"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="alamat" label="Alamat">
                <el-input
                  placeholder="Alamat"
                  v-model="currentData.dataPembeli.alamat"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="telp" label="Telpon">
                <el-input
                  placeholder="Telpon"
                  v-model="currentData.dataPembeli.telp"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30" type="flex" class="row-bg" justify="center">
            <el-col :span="12">
              <el-form-item prop="ktp" label="KTP">
                  <div class="upload formUpload">
                    <el-button @click="onPickFile('ktpPembeli')" type="primary"
                      >Upload<i class="el-icon-upload el-icon-right"></i
                    ></el-button>
                    <div>
                      <img v-if="currentData.dataPembeli.ktp != null" :src="currentData.dataPembeli.ktp" alt="" class="preview" />
                    </div>
                    <h1 @click="cancel('currentData','dataPembeli','ktp')" class="cancel" v-if="currentData.dataPembeli.ktp != null">X</h1>
                  </div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="tgl" label="Tanggal">
                <el-date-picker
                  type="date"
                  placeholder="Tanggal jual"
                  v-model="currentData.dataPembeli.tanggal"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="harga" label="Harga">
                <el-input
                  placeholder="Harga jual"
                  v-model="currentData.dataPembeli.hargaJual"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>

      <div class="button-content">
        <el-form-item prop="mobilImage" label="Mobil image">
        <div class="upload">
          <el-button class="" @click="onPickFile('imageInput')" type="primary"
            >Upload<i class="el-icon-upload el-icon-right"></i
          ></el-button>
          <div>
            <img v-if="currentData.image" :src="currentData.image" alt="" class="preview" />
            <h3 v-if="currentData.image"></h3>
            <h3 v-else class="uploadImage">Upload Image</h3>
          </div>
          <h1 @click="cancel('currentData','image', undefined)" class="cancel" v-if="currentData.image">X</h1>
        </div>
        </el-form-item>
        <div>
          <el-button
            @click="tambahData('dataMobil', 'dataPenjual', 'dataPembeli')"
            type="primary"
            >Edit</el-button
          >
          <el-button @click="reset('dataPembeli')" type="warning"
            >Reset</el-button
          >
          <el-button @click="kembali">Kembali</el-button>
        </div>
      </div>
      <input
        prop="image"
        type="file"
        style="display: none"
        ref="imageInput"
        @change="fileSelected"
        accept="image/*"
      />

      <input
        prop="image"
        type="file"
        style="display: none"
        ref="imageInput"
        @change="imageSurat"
        accept="image/*"
      />

      <input
        prop="image"
        type="file"
        style="display: none"
        ref="ktpPembeli"
        @change="ktpImagePembeli"
        accept="image/*"
      />

      <input
        prop="image"
        type="file"
        style="display: none"
        ref="ktpPenjual"
        @change="ktpImagePenjual"
        accept="image/*"
      />
    </el-form>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  data() {
    return {
      rules: {
        atasNama: [
          { required: true, message: "isi atas nama", trigger: "blur" },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        noMesin: [
          { required: true, message: "isi nomor mesin", trigger: "blur" },
        ],
        noRangka: [
          { required: true, message: "isi nomor rangka", trigger: "blur" },
        ],
        pajak: [{ required: true, message: "isi pajak", trigger: "blur" }],
        surat: [
          { required: true, message: "isi surat-surat", trigger: "blur" },
        ],
        tahun: [{ required: true, message: "isi tahun", trigger: "blur" }],
        merk: [{ required: true, message: "isi merk", trigger: "blur" }],
        type: [{ required: true, message: "isi tipe", trigger: "blur" }],
        transmisi: [
          { required: true, message: "pilih 1 transmisi", trigger: "blur" },
        ],
        plat: [{ required: true, message: "isi plat", trigger: "blur" }],
        nama: [{ required: true, message: "isi nama", trigger: "blur" }],
        alamat: [{ required: true, message: "isi alamat", trigger: "blur" }],
        telp: [
          { required: true, message: "isi nomor telpon", trigger: "blur" },
        ],
        tgl: [{ type: "date", message: "Please pick a date" }],
        // harga: [{ required: true, message: "isi harga", trigger: "blur" }],
        image: [{ required: true, message: "isi harga", trigger: "blur" }],
      },
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
    };
  },
  methods: {
    onPickFile(ref) {
      this.$refs[ref].click();
    },
    kembali() {
      this.$router.go(-1);
    },
    reset(formName) {
      this.$refs[formName].resetFields();
      this.image = null;
    },
    ktpImagePenjual(event) {
      if (event.target.files[0].size < 1040000) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.currentData.dataPenjual.ktp = fileReader.result;
        });
        fileReader.readAsDataURL(event.target.files[0]);
        // console.log(URL.createObjectURL(event.target.files[0]))
      } else {
        this.$message({
          message: "Ukuran gambar terlalu besar!",
          type: "error",
        });
      }
    },
    ktpImagePembeli(event) {
      if (event.target.files[0].size < 1040000) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.currentData.dataPembeli.ktp = fileReader.result;
        });
        fileReader.readAsDataURL(event.target.files[0]);
        // console.log(URL.createObjectURL(event.target.files[0]))
      } else {
        this.$message({
          message: "Ukuran gambar terlalu besar!",
          type: "error",
        });
      }
    },
    imageSurat(event) {
      if (event.target.files[0].size < 1040000) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.currentData.dataMobil.surat = fileReader.result;
        });
        fileReader.readAsDataURL(event.target.files[0]);
        // console.log(URL.createObjectURL(event.target.files[0]))
      } else {
        this.$message({
          message: "Ukuran gambar terlalu besar!",
          type: "error",
        });
      }
    },
    fileSelected(event) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.currentData.image = fileReader.result;
      });
      fileReader.readAsDataURL(event.target.files[0]);
      //  this.selectedImage = URL.createObjectURL(event.target.files[0])
      this.link = event;
    },
    cancel(mainProp, childProp, child2) {
      // this[test] = null // isi Barang
      if(child2 != undefined){
      this[mainProp][childProp][child2] = null
      }else{
        this[mainProp][childProp] = null
      }
    },
    onUpload() {},
    tambahData(formName, form2, form3) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs[form2].validate((valid) => {
            if (valid) {
              this.$refs[form3].validate((valid) => {
                console.log(this.$refs);
                if (valid) {
                  try{
                    db.collection("mobil")
                    .doc(this.$route.params.plat)
                    .update(
                          'dataMobil', this.currentData.dataMobil,
                          'dataPenjual', this.currentData.dataPenjual,
                          'dataPembeli', this.currentData.dataPembeli,
                          'image', this.currentData.image
                        )}
                        catch(error){
                          console.log(error)
                        }
                  this.$message({
                    message: "data berhasil di edit",
                    type: "success",
                  })
                    .then(this.$router.go(-1))
                    .catch((error) => console.log(error));
                } else {
                  this.$message({
                    message: "Data pembeli belum lengkap!",
                    type: "error",
                  });
                }
              });
            } else {
              this.$message({
                message: "Data penjual belum lengkap!",
                type: "error",
              });
            }
          });
        } else {
          this.$message({
            message: "Data mobil belum lengkap!",
            type: "error",
          });
        }
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    db.collection("mobil")
      .doc(to.params.plat)
      .get()
      .then((querySnapShot) => {
          next((vm) => {
            vm.currentData = querySnapShot.data();
          });
      });
  },
};
</script>

<style>
.new {
  padding: 60px 30px;
}
.title {
  margin-bottom: 0.8em;
}
.wrapper:nth-child(2) {
  margin: 50px 0;
}
.button-content {
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between !important;
}
.button-content::before {
  content: none;
}
.el-row::before {
  content: none;
}
.back {
  margin-left: 10px;
}
.upload h3 {
  text-align: center;
}
.upload {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
.edit {
  padding: 20px 50px;
}
.preview {
  width: 250px;
  height: 180px;
}
.upload .cancel {
  cursor: pointer;
  font-size: 35px;
  transition: 0.1s;
}
.cancel:hover {
  color: rgb(235, 47, 47);
}
.uploadImage {
  font-size: 30px;
}
</style>

// this.$refs[form3].validate((valid) => { // console.log(this.$refs) // if
(valid) { // db.collection('mobil').add({ // dataMobil: { // atasNama:
this.dataMobil.an, // noMesin: this.dataMobil.nom, // noRangka:
this.dataMobil.nor, // pajak: this.dataMobil.pajak, // surat:
this.dataMobil.surat, // tahun: this.dataMobil.tahun, // type:
this.dataMobil.type, // transmisi: this.dataMobil.transmisi, // merk:
this.dataMobil.merk, // plat: this.dataMobil.plat // }, // dataPenjual: { //
nama: this.dataPenjual.nama, // alamat: this.dataPenjual.alamat, // telp:
this.dataPenjual.telp, // ktp: this.dataPenjual.ktp, // tanggal:
this.dataPenjual.tgl, // hargaBeli: this.dataPenjual.harga // }, // dataPembeli:
{ // nama: this.dataPembeli.nama, // alamat: this.dataPembeli.alamat, // telp:
this.dataPembeli.telp, // ktp: this.dataPembeli.ktp, // tanggal:
this.dataPembeli.tgl, // hargaJual: this.dataPembeli.harga // }, // image:
this.image, // waktuPenambahan: `${this.time.getDate()}
${this.month[this.time.getMonth()]}, ${this.time.getFullYear()}` // }) //
this.$message({ // message: 'data berhasil ditambahkan', // type: 'success' //
}) // .then(this.$router.replace('/')) // .catch(error => console.log(error)) //
} else { // this.$message({ // message: 'lengkapi form terlebih dahulu', //
type: 'error' // }); // } // });
