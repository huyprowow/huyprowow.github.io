//js compile scss to css
//thiet lap xong cuoi cung phai chay gulp.cmd (teminal) de bat dau

//src: sourcefile sass(nguon)
//dest:destination css file (noi bien dich ra file output css)
//watch: recompile 
//series: export no ra
const {src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));//truyen require sass de bien dich,sau do can goi de compile thanh css


function buildStyles(){
    return src("scss/main.scss")//dau vao
    .pipe(sass())//import sass plugin (dong 4)
    .pipe(dest("src/css"))//noi bien dich ra
}

function watchTask() {//wath khi file thay doi compile lai de dong bo
    watch(["scss/main.scss"],buildStyles)//file can watch,ham build
}

//xuat
exports.default = series(buildStyles,watchTask)