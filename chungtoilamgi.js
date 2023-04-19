let products = {
    data: [
        {
            title: "Bảo vệ và hoà nhập trẻ em",
            image: "/image/icons_protection-hp.png",
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
            image: "/image/icons_survival-hp.png",
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
            image: "/image/icons_hinh3.png",
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
            image: "/image/icons_hinh4.png",
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
            image: "/image/icons_hinh6.png",
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
            image: "/image/icons_hinh7.png",
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

    let text3 = document.createElement("i")
    text3.classList.add("fa-solid","fa-chevron-right")
    text2.appendChild(text3)
    text1.appendChild(text2)
    card.appendChild(text1)

    let final1 = document.createElement("p")
    final1.innerText = item["final1"]
    final1.classList.add("text7")
    text2.appendChild(final1)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text4 = document.createElement("i")
    text4.classList.add("fa-solid","fa-chevron-right")
    text2.appendChild(text4)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text7")
    text2.appendChild(final2)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text5 = document.createElement("i")
    text5.classList.add("fa-solid","fa-chevron-right")
    text2.appendChild(text5)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final3 = document.createElement("p")
    final3.innerText = item["final3"]
    final3.classList.add("text7")
    text2.appendChild(final3)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text6 = document.createElement("i")
    text6.classList.add("fa-solid","fa-chevron-right")
    text2.appendChild(text6)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final4 = document.createElement("p")
    final4.innerText = item["final4"]
    final4.classList.add("text7")
    text2.appendChild(final4)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text7 = document.createElement("i")
    text7.classList.add("fa-solid","fa-chevron-right")
    text2.appendChild(text7)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final5 = document.createElement("p")
    final5.innerText = item["final5"]
    final5.classList.add("text7")
    text2.appendChild(final5)
    text1.appendChild(text2)
    card.appendChild(text1)

    let text8 = document.createElement("i")
    text8.classList.add("fa-solid","fa-chevron-right")
    text2.appendChild(text8)
    text1.appendChild(text2)
    card.appendChild(text1) 

    let final6 = document.createElement("p")
    final6.innerText = item["final6"]
    final6.classList.add("text7")
    text2.appendChild(final6)
    text1.appendChild(text2)
    card.appendChild(text1)


    document.getElementById("products").appendChild(card)
}