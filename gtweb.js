let products2 = {
    data: [
        {
            image: "/image/container-hinh4.jpeg",
            final: "Trang",
            title: "Bài thơ cho hào bình",
            content: "Những người trẻ sống trong xung đột sử dụng thơ để bày tỏ hy vọng về một tương lai hòa bình hơn",
            final2: "Truy cập trang",
        },
        {
            image: "/image/container-hinh6.jpeg",
            final: "Trang",
            title: "Cuộc khủng hoảng Yemen",
            content: "8 năm xung đột khiến hơn 11 triệu trẻ em cần hỗ trợ nhân đạo",
            final2: "Truy cập trang",
        },
        {
            image: "/image/nhungcauchuyen:hinh-9.jpeg",
            final: "Trang",
            title: "Ứng phó với COVID-19",
            content: "Tài nguyên và thông tin về ứng phó của UNICEF đối với đại dịch COVID-19",
            final2: "Truy cập trang",
        },
    ]
}

for (let item of products2.data) {
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
    text23.classList.add("fa-regular", "fa-pager")
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

    document.getElementById("products2").appendChild(card)
}