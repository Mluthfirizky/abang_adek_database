<template>
  <div class="new">
    <el-form
      :model="dataMobil"
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
              v-model="dataMobil.plat"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row :gutter="30" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <el-form-item prop="an" label="Atas Nama">
              <el-input
                placeholder="Atas nama"
                v-model="dataMobil.an"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="nom" label="Nomor Mesin">
              <el-input
                placeholder="Nomor mesin"
                v-model="dataMobil.nom"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="nor" label="Nomor Rangka">
              <el-input
                placeholder="Nomor rangka"
                v-model="dataMobil.nor"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <el-form-item prop="pajak" label="Pajak">
              <el-input
                placeholder="Pajak"
                v-model="dataMobil.pajak"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="surat" label="Surat-Surat">
              <div class="upload formUpload">
                <el-button @click="onPickFile('surat')" type="primary"
                  >Upload<i class="el-icon-upload el-icon-right"></i
                ></el-button>
                <div>
                  <img
                    v-if="dataMobil.surat"
                    :src="dataMobil.surat"
                    alt=""
                    class="preview"
                  />
                  <h3 v-if="dataMobil.surat"></h3>
                </div>
                <h1
                  @click="cancel('dataMobil','surat')"
                  class="cancel"
                  v-if="dataMobil.surat"
                >
                  X
                </h1>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="tahun" label="Tahun">
              <el-input
                placeholder="Tahun"
                v-model="dataMobil.tahun"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <el-form-item prop="merk" label="Merk">
              <el-input placeholder="Merk" v-model="dataMobil.merk"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="type" label="Tipe">
              <el-input placeholder="Tipe" v-model="dataMobil.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="transmisi" label="Transmisi">
              <el-select
                style="width: 100%"
                v-model="dataMobil.transmisi"
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
          :model="dataPenjual"
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
                  v-model="dataPenjual.nama"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="alamat" label="Alamat">
                <el-input
                  placeholder="Alamat"
                  v-model="dataPenjual.alamat"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="telp" label="Telpon">
                <el-input
                  placeholder="Telpon"
                  v-model="dataPenjual.telp"
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
                    <img
                      v-if="dataPenjual.ktp"
                      :src="dataPenjual.ktp"
                      alt=""
                      class="preview"
                    />
                    <h3 v-if="image"></h3>
                  </div>
                  <h1
                    @click="cancel('dataPenjual','ktp')"
                    class="cancel"
                    v-if="dataPenjual.ktp"
                  >
                    X
                  </h1>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="tgl" label="Tanggal">
                <el-date-picker
                  type="date"
                  placeholder="Tanggal Beli"
                  v-model="dataPenjual.tgl"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="harga" label="Harga">
                <el-input
                  placeholder="Harga beli"
                  v-model="dataPenjual.harga"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>

      <el-row class="wrapper">
        <el-form
          :model="dataPembeli"
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
                  v-model="dataPembeli.nama"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="alamat" label="Alamat">
                <el-input
                  placeholder="Alamat"
                  v-model="dataPembeli.alamat"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="telp" label="Telpon">
                <el-input
                  placeholder="Telpon"
                  v-model="dataPembeli.telp"
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
                    <img
                      v-if="dataPembeli.ktp"
                      :src="dataPembeli.ktp"
                      alt=""
                      class="preview"
                    />
                    <h3 v-if="image"></h3>
                  </div>
                  <h1
                    @click="cancel('dataPembeli', 'ktp')"
                    class="cancel"
                    v-if="dataPembeli.ktp"
                  >
                    X
                  </h1>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="tgl" label="Tanggal">
                <el-date-picker
                  type="date"
                  placeholder="Tanggal jual"
                  v-model="dataPembeli.tgl"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="harga" label="Harga">
                <el-input
                  placeholder="Harga jual"
                  v-model="dataPembeli.harga"
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
              <img v-if="image" :src="image" alt="" class="preview" />
              <h3 v-if="image"></h3>
              <h3 v-else class="uploadImage">Upload Image</h3>
            </div>
            <h1 @click="cancel('image', undefined)" class="cancel" v-if="image">X</h1>
          </div>
        </el-form-item>

        <div>
          <el-button
            @click="tambahData('dataMobil', 'dataPenjual', 'dataPembeli')"
            type="primary"
            >Tambah</el-button
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
        ref="surat"
        @change="suratImage"
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
  props: {
    collection: String,
  },
  data() {
    return {
      rules: {
        an: [
          { required: true, message: "isi atas nama", trigger: "blur" },
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        nom: [{ required: true, message: "isi nomor mesin", trigger: "blur" }],
        nor: [{ required: true, message: "isi nomor rangka", trigger: "blur" }],
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
        ktp: [{ required: true, message: "isi ktp", trigger: "blur" }],
        tgl: [{ type: "date", message: "Please pick a date" }],
        harga: [{ required: true, message: "isi harga", trigger: "blur" }],
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
      time: new Date(),
      dataMobil: {
        an: null,
        nom: null,
        nor: null,
        pajak: null,
        surat: null,
        tahun: null,
        merk: null,
        type: null,
        transmisi: null,
        plat: null,
      },
      dataPenjual: {
        nama: null,
        alamat: null,
        telp: null,
        ktp: null,
        tgl: null,
        harga: null,
      },
      dataPembeli: {
        nama: null,
        alamat: null,
        telp: null,
        ktp: null,
        tgl: null,
        harga: null,
      },
      selectedImage: null,
      image: null,
    };
  },
  methods: {
    cancel(mainProp, childProp) {
      // this[test] = null // isi Barang
      if(childProp != undefined){
      this[mainProp][childProp] = null
      console.log(this[mainProp][childProp])
      }else{
        this[mainProp] = null
      }
    },
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
    fileSelected(event) {
      if (event.target.files[0].size < 346666) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.image = fileReader.result;
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
    ktpImagePenjual(event) {
      if (event.target.files[0].size < 346666) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.dataPenjual.ktp = fileReader.result;
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
      if (event.target.files[0].size < 346666) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.dataPembeli.ktp = fileReader.result;
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
    suratImage(event) {
      if (event.target.files[0].size < 346666) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.dataMobil.surat = fileReader.result;
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
    // cancel(target) {
    //   if(target == this.image){
    //     this.image = null
    //   }else if(target == this.dataPenjual.ktp){
    //     this.dataPenjual.ktp = null
    //   }else if(target == this.dataPembeli.ktp){
    //     this.dataPembeli.ktp = null
    //   }else if(target == this.dataMobil.surat){
    //     this.dataMobil.surat = null
    //   }
    // },
    onUpload() {},
    tambahData(formName, form2, form3) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs[form2].validate((valid) => {
            if (valid) {
              this.$refs[form3].validate((valid) => {
                console.log(this.$refs);
                if (valid) {
                  if (this.image != null) {
                    db.collection(this.collection).add({
                      dataMobil: {
                        atasNama: this.dataMobil.an,
                        noMesin: this.dataMobil.nom,
                        noRangka: this.dataMobil.nor,
                        pajak: this.dataMobil.pajak,
                        surat: this.dataMobil.surat,
                        tahun: this.dataMobil.tahun,
                        type: this.dataMobil.type,
                        transmisi: this.dataMobil.transmisi,
                        merk: this.dataMobil.merk,
                        plat: this.dataMobil.plat,
                      },
                      dataPenjual: {
                        nama: this.dataPenjual.nama,
                        alamat: this.dataPenjual.alamat,
                        telp: this.dataPenjual.telp,
                        ktp: this.dataPenjual.ktp,
                        tanggal: this.dataPenjual.tgl,
                        hargaBeli: this.dataPenjual.harga,
                      },
                      dataPembeli: {
                        nama: this.dataPembeli.nama,
                        alamat: this.dataPembeli.alamat,
                        telp: this.dataPembeli.telp,
                        ktp: this.dataPembeli.ktp,
                        tanggal: this.dataPembeli.tgl,
                        hargaJual: this.dataPembeli.harga,
                      },
                      image: this.image,
                      waktuPenambahan: `${this.time.getDate()} ${
                        this.month[this.time.getMonth()]
                      }, ${this.time.getFullYear()}`,
                    });

                    this.$message({
                      message: "data berhasil ditambahkan",
                      type: "success",
                    })
                      .then(this.$router.replace("/"))
                      .catch((error) => console.log(error));
                  } else {
                    this.$message({
                      message: "Gambar belum ditambahkan!",
                      type: "error",
                    });
                  }
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

.upload {
  padding: 7px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 20px;
}
.formUpload {
  border: 1px rgba(0, 0, 0, 0.198) solid;
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
  font-size: 15px;
  opacity: 0.7;
  color: gray;
}
.mobilImage {
  padding: 10px;
}
.formUpload button {
  padding: 5px;
  margin-right: -15px;
  flex: 1;
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
