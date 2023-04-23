let products = {
    data: [
        {
            image: "/image/container-hinh4.jpeg",
            final: "bài báo",
            title: "Bài thơ cho hào bình",
            content: "Những người trẻ sống trong xung đột sử dụng thơ để bày tỏ hy vọng về một tương lai hòa bình hơn",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-5.jpeg",
            final: "Bài báo",
            title: "Như thể cô ấy biết sắp có động đất",
            content: "Elanur đã thoát chết trong gang tấc trong trận động đất ở Türkiye. Mẹ cô chia sẻ khả năng phục hồi của con gái đã giúp họ như thế nào trong quá trình hồi phục",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-6.jpeg",
            final: "Bài báo",
            title: "11 trường hợp khẩn cấp cần được quan tâm và hỗ trợ nhiều hơn trong năm 2023",
            content: "Trên toàn cầu, UNICEF sẽ tiếp tục hỗ trợ trẻ em và các gia đình đang đối mặt với khủng hoảng nhân đạo",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-7.jpeg",
            final: "Bài báo",
            title: "Cấp điện cho các bệnh viện phụ sản ở Ukraine",
            content: "Máy phát điện do UNICEF cung cấp giúp các bệnh viện ở Ukraine tiếp tục công việc quan trọng của họ",
            final2: "Đọc bài báo",
        },
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("text20")

    let text21 = document.createElement("a")
    text21.classList.add("text21")

    let text29 = document.createElement("div")
    text29.classList.add("text29")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    text29.appendChild(image)
    text21.appendChild(text29)
    card.appendChild(text21)

    let text22 = document.createElement("div")
    text22.classList.add("text22")

    let text23 = document.createElement("i")
    text23.classList.add("fa-regular", "fa-book-open")
    text22.appendChild(text23)
    text21.appendChild(text22)
    card.appendChild(text21) 

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("text22-1")
    text22.appendChild(final)
    text21.appendChild(text22)
    card.appendChild(text21)

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("text25")
    text21.appendChild(title)
    card.appendChild(text21)

    let content = document.createElement("p")
    content.innerText = item["content"]
    content.classList.add("text23")
    text21.appendChild(content)
    card.appendChild(text21)

    let text24 = document.createElement("div")
    text24.classList.add("text24")

    let text25 = document.createElement("i")
    text25.classList.add("fa-solid","fa-chevron-right")
    text24.appendChild(text25)
    text21.appendChild(text24)
    card.appendChild(text21) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text26")
    text24.appendChild(final2)
    text21.appendChild(text24)
    card.appendChild(text21)

    document.getElementById("products").appendChild(card)
}