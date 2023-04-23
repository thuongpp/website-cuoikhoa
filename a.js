let products = {
    data: [
        {
            image: "/image/UN061807.jpeg",
            title: "Bảo vệ trẻ em khỏi vũ khí nổ",
            contect: "Các thiết bị nổ cải tiến (IED), bom, mìn và tần dư chiến tranh giết chết và làm bị thương hàng ngàn trẻ em mỗi năm",
            final: "Truy cập trang"
        },
        {
            image: "/image/container-hinh3.jpeg",
            title: "Cảnh báo trẻ em: Cực kỳ nguy hiểm ở trung tâm Sahel",
            contect: "Hàng triệu người cần trong bối cảnh xung đột vũ trang leo thang và trừng phạt các cuộc khủng hoảng khí hậu",
            final: "Truy cập trang"
        },
        {
            image: "/image/container-hinh4.jpeg",
            title: "bài thơ cho hoà bình",
            contect: "Những người trẻ sống trong xung đột sử dụng thơ để bài tỏ hy vọng về tương lai hoà bình hơn",
            final: "Truy cập trang"
        },
        {
            image: "/image/container-hinh6.jpeg",
            title: "Cuộc khủng hoảng Yemen",
            contect: "8 năm xung đột khiến hơn 11tr trẻ em cần hỗ trợ nhân đạo",
            final: "Truy cập trang"
        },
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("text25")

    let text25 = document.createElement("div")
    text25.classList.add("text26")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    text25.appendChild(image)
    card.appendChild(text25)

    let text27 = document.createElement("div")
    text27.classList.add("text27")

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("tieude")
    text27.appendChild(title)
    card.appendChild(text27)

    let contect = document.createElement("p")
    contect.innerText = item["contect"]
    contect.classList.add("noidung")
    text27.appendChild(contect)
    card.appendChild(text27)

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("span-noidung")
    text27.appendChild(final)
    card.appendChild(text27)

    // let button = document.createElement("button")
    
    // button.innerText = "Thêm vào giỏ hàng"
    // card.appendChild(button)

    document.getElementById("products").appendChild(card)
}