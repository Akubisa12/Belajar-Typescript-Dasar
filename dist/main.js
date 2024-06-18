"use strict";
// KOMPILASI PERTAMA
// var nama = "Joko";
// var umur = 12;
// umur  = 20;
// console.log(nama);
// ANOTATION DATA PRIMITIVE
// IMPLISIT
// let nama = "Joko";
// console.log(nama)
// EXPLISIT 
// let nama:string = "Joko";
// console.log(nama);
// let umur:number = 18;
// console.log(umur);
// let isProgrammer:boolean = true;
// console.log(isProgrammer);
// UNION
// let isCakep: string|number|boolean = false;
// console.log(isCakep);
// let isCakep: any  = 11;
// console.log(isCakep);
// ARRAY
// let array_nama: string [] = ["Joko","Budi","Tono"];
// let array_umur: number []  = [1,2,3,4];
// let array_isprogrammer: boolean [] = [true, false, false];
// console.log(array_nama);
// console.log(array_umur);
// console.log(array_isprogrammer);
// lebih dari satu tipe data
// let array_level: (string|number) [];
// array_level = ["Juara1", 2,3];
// console.log(array_level);
// let array_any: any[];
// array_any = ["juara1",2,3,false];
// console.log(array_any);
// TUPLE 
// adalah sebuah tipe array yang sudah fiks untuk panjang dan juga isian di tiap indexnya
// let tuple1: [string,number,boolean];
// tuple1 = ["joko",17,true];
// console.log(tuple1);
// OBJECT
// let mahasiswa: object[] = [
//     {nim:123,nama:"Anton"},
//     {nim:456,nama:"Budi"},
// ]
// console.log(mahasiswa);
// FUNCTION
// function tambah(nilai1,nilai2){
//     return nilai1 + nilai2;
// }
// console.log(tambah(1,2));
// function tambah(nilai1,nilai2){
//     return nilai1 + nilai2;
// }
// console.log(tambah(1,"2"));
// function tambah(nilai1:number,nilai2:number){
//     return nilai1 + nilai2;
// }
// console.log(tambah(1,3));
// function tambah(nilai1:number,nilai2:number){
//     return "halo";
// }
// console.log(tambah(1,3));
// menentukan tidak mereturn data
// function tambah(nilai1:number,nilai2:number):number{
//     return nilai1+nilai2;
// }
// console.log(tambah(1,3));
// Fungsi hanya untuk mengeluarkan tipe data yang tidak diketahui 
// function tambah(nilai1:number,nilai2:number):void{
//     let hasil = nilai1 + nilai2;
//     console.log(hasil);
// }
// tambah(1,3);
// function halo(pesan:string):string{
//     return pesan
// }
// console.log(halo("Halooooo"))
// INTERFACE : Sebuah blueprint yang nantinya bisa kita gunakan untuk membuat object berikutnya
// interface MahasiswaInterface{
//     nim:number;
//     nama_mahasiswa:string;
// }
// let mahasiswa_eko: MahasiswaInterface = {
//     nim:123,
//     nama_mahasiswa:"Eko"
// };
// let mahasiswa_joko: MahasiswaInterface = {
//     nim:456,
//     nama_mahasiswa:"Joko",
// };
// console.log(mahasiswa_eko);
// console.log(mahasiswa_joko)
// INTERSECTION : membuat lebih dari 1 interface
// interface MahasiswaInterface{
//     nim:number;
//     nama_mahasiswa:string;
// }
// interface DosenInterface{
//     nidn: number | string;
//     nama_dosen: string;
// }
// Menggabungkan 2 property dari tiap tiap interface
// type dpa = MahasiswaInterface & DosenInterface;
// let dpa1: dpa = {
//     nim:123,
//     nama_mahasiswa:'Eko',
//     nidn:456,
//     nama_dosen: "Budi",
// };
// console.log(dpa1);
// CLASS
// class Mahasiswa {
//     nim:number|string;
//     nama:string;
//     constructor(param_nim:number|string,param_nama:string){
//         this.nim = param_nim;
//         this.nama = param_nama;
//         console.log(this.nim, this.nama);
//     }
// }
// const joko = new Mahasiswa(123,"Jokodokondo");
// class Mahasiswa {
//     nim:number|string;
//     nama:string;
//     constructor(param_nim:number|string,param_nama:string){
//         this.nim = param_nim;
//         this.nama = param_nama;
//     }
//     halo():string {
//         return `halo ${this.nama} NIM kamu adalah ${this.nim}`;
//     }
// }
// const joko = new Mahasiswa(123,"Jokodokondo");
// console.log(joko.halo());
// const budi = new Mahasiswa(456,"BudiWijaya");
// console.log(budi.halo());
// ENUM : kumpulan constan yang bisa berisikan data dan dia berisikan tipe nya adalah string atau number
// enum StatusMahasiswa {
//     lulus = "L",
//     aktif = "A",
//     cuti = "C",
// }
// function displayStatus(status:string):void{
//     if(status == StatusMahasiswa.lulus){
//         console.log('Mahasiswa sudah lulus');
//     }else if(status == StatusMahasiswa.aktif){
//         console.log("Mahasiswa masih aktif");
//     }else if(status == StatusMahasiswa.cuti){
//         console.log("Mahasiswa sedang cuti");
//     }
// }
// displayStatus("A");
// displayStatus("C");
// GENERIC
// function getFirstElement(param: string[]):string{
//     return param[0];
// }
// const array = ["a","b","c"];
// let hasil = getFirstElement(array);
// console.log(hasil);
// CEK APAKAH HASIL YANG DIDAPAT ADALAH STRING
// function getFirstElement(param: string[]):string{
//     return param[0];
// }
// function getFirstElementNumber(param: number[]):number{
//     return param[0];
// }
// const array = [1,2,3];
// let hasil : number;
// hasil = getFirstElementNumber(array);
// console.log(hasil);
// MEMBUAT FUNGSI MENJADI GENERIC
// function getFirstElement<T>(param: T[]): T{
//     return param[0];
// }
// const array = [1,2,3];
// let hasil : number;
// hasil = getFirstElement<number>(array);
// console.log(hasil);
