const daftarKaryawan = [
    {
        NIK: 33327050,
        name: "Dimas Rajasah",
        gender: "Laki-laki",
        position: "Level 2",
        gaji: 3000000,
    },
    {
        NIK: 33325423,
        name: "Ani Ghoniyyah",
        gender: "Perempuan",
        position: "Technical Meeting",
        gaji: 3000000,
    }
]

let opinion = 0
let mode = "add"
// LET MODE ADD

const previewEmployee = () => {
    const tableKaryawan = document.getElementById('tableKaryawan')
    tableKaryawan.innerHTML = ''
    tableKaryawan.innerHTML += `<thead><th>No</th><th>NIK</th><th>Nama</th><th>Jenis Kelamin</th><th>Posisi Karyawan</th><th>Gaji</th><th>Edit</th><th>Delete</th></thead>`

    for (let jayy in daftarKaryawan) {
        tableKaryawan.innerHTML +=
        `<tr>
            <td>${parseInt(jayy)+1}</td>
            <td>${daftarKaryawan[jayy].NIK}</td>
            <td>${daftarKaryawan[jayy].name}</td>
            <td>${daftarKaryawan[jayy].gender}</td>
            <td>${daftarKaryawan[jayy].position}</td>
            <td>${daftarKaryawan[jayy].gaji}</td>
            <td><button class="btn btn-primary" onclick=editKaryawan("${daftarKaryawan[jayy].name}")>Edit</button></td>
            <td><button class="btn btn-danger" onclick=hapusKaryawan("${daftarKaryawan[jayy].name}")>Delete</button></td>
        </tr>`
    }
}

const addEmployee = () => {
    const NIK = document.getElementById("txtNIK").value
    const name = document.getElementById("txtName").value
    const gender = document.getElementById("txtGender").value
    const position = document.getElementById("txtPosition").value
    const gaji = document.getElementById("txtGaji").value
    const newEmployee = {
        NIK: NIK,
        name: name,
        gender: gender,
        position: position,
        timeBefore: timeBefore,
        timeAfter: timeAfter,
        gaji: gaji,
    }
    if (mode == 'add') {
        daftarKaryawan.push(newEmployee)
    } else {
        daftarKaryawan[mode] = newEmployee
        mode = 'add'
    }
     

    document.getElementById("txtName").value = ""    
}

const helpmeFind = (finder) => {
    for (let jams = 0; jams<daftarKaryawan.length; jams++) {
        if (daftarKaryawan[jams].name == finder) {
            return jams
        }
    }
}

const editKaryawan = (target) => {
    const indexEdit = helpmeFind(target)
    console.log(indexEdit)
    const fuit = daftarKaryawan[indexEdit]
    console.log(fuit)
    document.getElementById("txtNIK").value = fuit.NIK
    document.getElementById("txtName").value = fuit.name
    document.getElementById("txtGender").value = fuit.gender
    document.getElementById("txtPosition").value = fuit.position
    document.getElementById("txtGaji").value = fuit.gaji

    mode = indexEdit
}

const hapusKaryawan = (target) => {
    const removedIndex = helpmeFind(target)
    daftarKaryawan.splice(removedIndex, 1)
    document.getElementById("txtNIK").value = ""
    document.getElementById("txtName").value = ""
    document.getElementById("txtGender").value = ""
    document.getElementById("txtPosition").value = ""
    document.getElementById("txtGaji").value = ""
}