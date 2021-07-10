// Sử dụng thư viện AOS
AOS.init({ duration: 1000 });


// Xử lý thanh nav bar 
window.addEventListener("scroll", e => {
    if(window.innerWidth <= 1200) {
        if (window.scrollY >=100) {
            document.querySelector("header").classList.add("scroll")
            document.querySelector(".navbar-brand").classList.add("active")
            if(window.scrollY >=300){
                document.querySelector("header").classList.add("active")
            } else {
                document.querySelector("header").classList.remove("active")
            }
        } else {
            document.querySelector("header").classList.remove("scroll")
            document.querySelector(".navbar-brand").classList.remove("active")
        }
    } else {
        if (window.scrollY >=100) {
            document.querySelector("header").classList.add("scroll")
            if(window.scrollY >=300){
                document.querySelector("header").classList.add("active")
            } else {
                document.querySelector("header").classList.remove("active")
            }
        } else {
            document.querySelector("header").classList.remove("scroll")
        }
    }
    
})


let downs = document.querySelectorAll(".fa-chevron-down");
let ups = document.querySelectorAll(".fa-chevron-up");
for (let i = 0; i < downs.length; ++i) {
    downs[i].addEventListener("click", e => {
        for (let i = 0; i < downs.length; ++i) {
                downs[i].classList.remove("d-none")
                ups[i].classList.add("d-none")
        }

        downs[i].classList.add("d-none")
        ups[i].classList.remove("d-none")
    })
}




document.querySelector(".humburger").addEventListener("click", e => {

    if (document.querySelector(".slide-bar").classList.contains("active")) {
        document.querySelector(".slide-bar").classList.remove("active")
        document.querySelector(".wrapper-master").style.left = "0%"
        document.querySelector("header").style.left = "0%"
        document.querySelector(".brand-hide").classList.remove ("d-none")
        document.querySelector(".humburger").classList.remove ("active")
        document.querySelector("body").style.overflowY = "unset"
        document.querySelector("body").style.overflowX = "unset"


    } else {

        if (window.innerWidth >= 390) {
            if (window.scrollY >=300) {
                document.querySelector(".slide-bar").classList.add("active")
                document.querySelector(".wrapper-master").style.left = "300px"
                document.querySelector("header").style.left = "300px"
                document.querySelector(".brand-hide").classList.add ("d-none")        
                document.querySelector(".humburger").classList.add ("active")
                document.querySelector("body").style.overflowY = "hidden"
                document.querySelector("body").style.overflowX = "hidden"
            } else {
                document.querySelector(".slide-bar").classList.add("active")
                document.querySelector(".wrapper-master").style.left = "300px"
                document.querySelector(".brand-hide").classList.add ("d-none")        
                document.querySelector(".humburger").classList.add ("active")
                document.querySelector("body").style.overflowY = "hidden"
                document.querySelector("body").style.overflowX = "hidden"
            }
        } else {
            if (window.scrollY >=300) {
                document.querySelector(".slide-bar").classList.add("active")
                document.querySelector(".wrapper-master").style.left = "250px"
                document.querySelector("header").style.left = "250px"
                document.querySelector(".brand-hide").classList.add ("d-none")        
                document.querySelector(".humburger").classList.add ("active")
                document.querySelector("body").style.overflowY = "hidden"
                document.querySelector("body").style.overflowX = "hidden"
            } else {
                document.querySelector(".slide-bar").classList.add("active")
                document.querySelector(".wrapper-master").style.left = "250px"
                document.querySelector(".brand-hide").classList.add ("d-none")        
                document.querySelector(".humburger").classList.add ("active")
                document.querySelector("body").style.overflowY = "hidden"
                document.querySelector("body").style.overflowX = "hidden"
            }
        }
    }
})



// kết hợp xử lý dữ liệu từ back-end 
const service = new TeacherService()

function getTeacherList () {
    service.getTeacherListAPI()
        .then(result => {
            renderTeacher(result.data)
            document.querySelector("#loading").classList.add("d-none");
        })
        .catch(error => {
            console.log(error)
        })
}

getTeacherList()

function renderTeacher(teacherList) {
   let html = ''
    teacherList.filter(gv => gv.loaiND === "GV").forEach((teacher, index) => {
        let delay = index * 100
        html += `<div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-5" data-aos="fade" data-aos-delay=${delay}>
                    <div class="card">
                        <div class="img-wrapper">
                            <img class="card-img-top" src="./../../assets/images/${teacher.hinhAnh}" alt="Card image cap">
                        </div>
                        <div class="card-body text-center">
                            <p>${teacher.ngonNgu}</p>
                            <h3 class="card-title">${teacher.hoTen}</h3>
                            <h6 class="card-text">${teacher.moTa}</h6>
                        </div>
                    </div>
                </div>`
    })
    document.querySelector("#themGiaoVien").innerHTML = html
}

document.querySelector(".send-btn").addEventListener("click", e => {
    let inputs = document.querySelectorAll(".value");
    let errors = document.querySelectorAll(".text-danger");

    inputs.forEach((input, index) => {
        if (!input.value) {
            errors[index].innerHTML = "* The field is required!"
        } else {
            errors[index].innerHTML = ""
        }
    })
})


// xử lý validation form
function hanleClick() {
    if (!document.querySelector(".yourEmail").value) {
        document.querySelector(".text-white").innerHTML = "* The field is required!"
    } else {
        document.querySelector(".text-white").innerHTML = ""
    }
}