let products = {
    data: [
        {
            title: "Bảo vệ và hoà nhập trẻ em",
            image: "/image/chungtalamgi:hinh-2.png",
            vertica: "Mọi trẻ em đều có quyền lớn lên trong một môi trường an toàn và hoà nhập",
            contect: "PROTECT CHILDREN hợp tác với các đối tác trên khắp thế giới để thúc đẩy các chính sách và mở rộng khả năng tiếp cận các dịch vụ bảo vệ tất cả trẻ em.",
            final1: "Phát triển vị thành niên",
            final2: "Trẻ em bị bật gốc",
            final3: "Thay đổi xã hội cà hành vi",
            final4: "Bình đẳng giới",
            final5: "Bảo vệ trẻ em",
            final6: "Trẻ em khuyết tật",
        },
        {
            title: "Sự sống sót của trẻ em",
            image: "/image/chungtalamgi:hinh-3.png",
            vertica: "Mọi trẻ ẹm đều có quyền được tồn tại và phát triển",
            contect: "PROTECT CHILDREN đã giúp giảm tỷ lệ tử vong ở trẻ em trên toàn thế giới bằng cách làm việc để tiếp cận những trẻ em dễ bị tổn thương nhất ở mọi nơi.",
            final1: "Phát triển thời thơ ấu",
            final2: "HIV/AIDS",
            final3: "Dinh dưỡng",
            final4: "Sức khoẻ",
            final5: "Chủng ngừa",
            final6: "WASH: nước, vệ sinh",
        },
        {
            title: "Giáo dục",
            image: "/image/chungtalamgi:hinh-4.png",
            vertica: "Mọi trẻ em đều có quyền được học",
            contect: "PROTECT CHILDREN hoạt động trên khắp thế giới để hỗ trợ việc học tập có chất lượng cho mọi bé trai và bé gái, đặc biệt là những trẻ có nguy cơ bị bỏ lại phía sau.",
            final1: "Trẻ em khuyết tật",
            final2: "Giáo dục",
            final3: "Bình đẳng giới",
            final4: "Phát triển thời thơ ấu",
            final5: "Giáo dục trong trường hợp khẩn cấp",
            final6: "Đỏi mới trong giáo dục",
        },
        {
            title: "Trong trường hợp khẩn cấp",
            image: "/image/chungtalamgi:hinh-5.png",
            vertica: "Tiếp cận mọi trẻ em trong trường hợp khẩn cấp",
            contect: "PROTECT CHILDREN luôn có mặt trước, trong và sau các trường hợp khẩn cấp, làm việc để tiếp cận trẻ em và các gia đình với viện trợ cứu sinh và hỗ trợ dài hạn.",
            final1: "Trường hợp khẩn cấp và hành động nhân đạo khác",
            final2: "Hành động nhân đạo vì trẻ em",
            final3: "Hành động nhân đạo vì trẻ em",
            final4: "Hành động nhân đạo vì trẻ em",
            final5: "Hành động nhân đạo vì trẻ em",
            final6: "Hành động nhân đạo vì trẻ em",
        },
        {
            title: "Giới tính",
            image: "/image/chungtalamgi:hinh-6.png",
            vertica: "Mọi cô gái đều có quyền phát huy hết khả năng của mình",
            contect: "PROTECT CHILDREN hoạt động trên toàn thế giới để trao quyền cho trẻ em gái và phụ nữ, đồng thời đảm bảo họ tham gia đầy đủ vào các hệ thống chính trị, xã hội và kinh tế.",
            final1: "Bình đẳng giới",
            final2: "Bình đẳng giới",
            final3: "Bình đẳng giới",
            final4: "Bình đẳng giới",
            final5: "Bình đẳng giới",
            final6: "Bình đẳng giới",
        },
        {
            title: "Đổi mới cho trẻ em",
            image: "/image/chungtalamgi:hinh-7.png",
            vertica: "Đổi mới để mang lại kết quả cho mọi trẻ em",
            contect: "PROTECT CHILDREN hợp tác với các đối tác trong mọi lĩnh vực để cùng tạo ra các giải pháp sáng tạo nhằm thúc đẩy tiến bộ cho trẻ em và thanh thiếu niên.",
            final1: "Trường hợp khẩn cấp và hành động nhân đạo khác",
            final2: "Đổi mới",
            final3: "Đổi mới trong giáo dục",
            final4: "Đổi mới sản phẩm",
            final5: "Đổi mới trong giáo dục",
            final6: "Đổi mới sản phẩm",
        },
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("text1")

    let text1 = document.createElement("div")
    text1.classList.add("text2")

    let title = document.createElement("h1")
    title.innerText = item["title"]
    title.classList.add("text3")
    text1.appendChild(title)
    card.appendChild(text1)

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    text1.appendChild(image)
    card.appendChild(text1)

    let vertica = document.createElement("h3")
    vertica.innerText = item["vertica"]
    vertica.classList.add("text4")
    text1.appendChild(vertica)
    card.appendChild(text1)

    let contect = document.createElement("p")
    contect.innerText = item["contect"]
    contect.classList.add("noidung")
    text1.appendChild(contect)
    card.appendChild(text1)

    let text2 = document.createElement("div")
    text2.classList.add("text5")

    let text10 = document.createElement("div")
    text10.classList.add("text10")

    let text3 = document.createElement("i")
    text3.classList.add("fa-solid","fa-chevron-right")
    text10.appendChild(text3)
    text2.appendChild(text10)
    text1.appendChild(text2)
    card.appendChild(text1)

    let final1 = document.createElement("p")
    final1.innerText = item["final1"]
    final1.classList.add("text7")
    text10.appendChild(final1)
    text2.appendChild(text10)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text11 = document.createElement("div")
    text11.classList.add("text11")

    let text4 = document.createElement("i")
    text4.classList.add("fa-solid","fa-chevron-right")
    text11.appendChild(text4)
    text2.appendChild(text11)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text7")
    text11.appendChild(final2)
    text2.appendChild(text11)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text12 = document.createElement("div")
    text12.classList.add("text12")

    let text5 = document.createElement("i")
    text5.classList.add("fa-solid","fa-chevron-right")
    text12.appendChild(text5)
    text2.appendChild(text12)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final3 = document.createElement("p")
    final3.innerText = item["final3"]
    final3.classList.add("text7")
    text12.appendChild(final3)
    text2.appendChild(text12)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text13 = document.createElement("div")
    text13.classList.add("text13")

    let text6 = document.createElement("i")
    text6.classList.add("fa-solid","fa-chevron-right")
    text13.appendChild(text6)
    text2.appendChild(text13)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final4 = document.createElement("p")
    final4.innerText = item["final4"]
    final4.classList.add("text7")
    text13.appendChild(final4)
    text2.appendChild(text13)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text14 = document.createElement("div")
    text14.classList.add("text14")

    let text7 = document.createElement("i")
    text7.classList.add("fa-solid","fa-chevron-right")
    text14.appendChild(text7)
    text2.appendChild(text14)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final5 = document.createElement("p")
    final5.innerText = item["final5"]
    final5.classList.add("text7")
    text14.appendChild(final5)
    text2.appendChild(text14)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text15 = document.createElement("div")
    text15.classList.add("text15")

    let text8 = document.createElement("i")
    text8.classList.add("fa-solid","fa-chevron-right")
    text15.appendChild(text8)
    text2.appendChild(text15)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final6 = document.createElement("p")
    final6.innerText = item["final6"]
    final6.classList.add("text7")
    text15.appendChild(final6)
    text2.appendChild(text15)
    text1.appendChild(text2)
    card.appendChild(text1)


    document.getElementById("products").appendChild(card)
}


let products2 = {
    data: [
        {
            final: "Liên kết",
            title: "Tình hình trẻ em thế giới",
            contect: "Cuộc sống và tương lai của hàng triệu trẻ em đang gặp nguy hiểm...",
            final2: "Truy cập trang"
        },
        {
            final: "Liên kết",
            title: "Giới thiệu về Website",
            contect: "Tìm hiểu về UNICEF, các đối tác của chúng tôi và những người tham gia cùng chúng tôi để đấu tranh cho quyền của mọi trẻ em.",
            final2: "Truy cập trang"
        },
        {
            final: "Liên kết",
            title: "Nơi chúng tôi làm việc",
            contect: "Khám phá công việc của UNICEF tại hơn 190 quốc gia và vùng lãnh thổ.",
            final2: "Truy cập trang"
        },
        {
            final: "Liên kết",
            title: "làm việc với chúng tôi",
            contect: "Có muốn tahy đổi thế giới không? Làm việc với chúng tôi.",
            final2: "Truy cập trang"
        },
    ]
}

for (let item of products2.data) {
    let card2 = document.createElement("div")
    card2.classList.add("text20")

    let text21 = document.createElement("a")
    text21.classList.add("text21")

    let text22 = document.createElement("div")
    text22.classList.add("text22")

    let text23 = document.createElement("i")
    text23.classList.add("far", "fa-external-link")
    text22.appendChild(text23)
    text21.appendChild(text22)
    card2.appendChild(text21) 

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("span-noidung")
    text22.appendChild(final)
    text21.appendChild(text22)
    card2.appendChild(text21)

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("text25")
    text21.appendChild(title)
    card2.appendChild(text21)

    let contect = document.createElement("p")
    contect.innerText = item["contect"]
    contect.classList.add("text23")
    text21.appendChild(contect)
    card2.appendChild(text21)

    let text24 = document.createElement("div")
    text24.classList.add("text24")

    let text25 = document.createElement("i")
    text25.classList.add("fa-solid","fa-chevron-right")
    text24.appendChild(text25)
    text21.appendChild(text24)
    card2.appendChild(text21) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text26")
    text24.appendChild(final2)
    text21.appendChild(text24)
    card2.appendChild(text21)

    document.getElementById("products2").appendChild(card2)
}