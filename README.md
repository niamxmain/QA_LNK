# QA_LNK
## Cloning Repo
`git clone https://github.com/niamxmain/QA_LNK.git`
`npm install`
`npx cypress run` or `npx cypress open`

## Overview
Ini adalah sebuah project automation testing yang saya buat untuk menyelesaikan tugas teknikal tes
dalam proses rekruitmen [PT Lautan Natural Krimerindo](https://lautan-natural-krimerindo.com/) untuk posisi Freelance QA.
Di repositori ini saya menggunakana teknologi [Cypress](https://www.cypress.io/). Cypress sendiri adalah sebuah framework automation testing yang bisa dijalankan menggunakan bahasa pemrograman Javascript. Framework ini memiliki fokus pengujian untuk e2e testing.
Fitur yang saya uji dalam project ini yaitu sebuah fitur FORM untuk memberikan nilai/mereview kepuasan pelanggan mengenai sebuah produk. Terdapat 5 poin penilaian yang harus diisi diantaranya:
- Fullname
- Phone Number
- Product Type : Affordable, expensive, and other
- Rating: 1 to 5
- Dates
Untuk link form bisa anda akses di [link review](https://forms.office.com/r/u5LQxYEFKn)
## Test Case
Ada sebanyak 15 test case yang saya buat dipengujian ini, dan sudah saya buat dalam google spreadsheet agar mudah untuk dibaca dan dipahami. [Link Testcase](https://docs.google.com/spreadsheets/d/1nmLVPNksD0jk7DpA2uhCP0noYwToHeaJ6_r5LyZxYwo/edit?usp=sharing).
## Hasil Pengujian 
Hasil pengujian dan pelaporan saya memanfaatkan package yang telah disediakan oleh [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter). Dan bisa anda akses dengan membuka file **index.html** di folder **reports/html**.

