# EasyGraph

EasyGraph uygulaması hızlı graphql queryleri oluşturup çıktılarını alabildiğimiz basit bir tool olarak adlandırabiliriz.

- Query görüntüleme
- Mutation görüntüleme
- Query veya mutation altında olabilen type'ları görüntüleme ve seçme

işlemlerini yapmaktadır.

## Gereksinimler

- React kütüphanesi kullanılarak geliştirilmiş ui uygulaması
- Graphql ile tasarlanmış Node.js API uygulaması

---

## API

### Database schema

```js
User: {
    id: ID,
    name: String,
    surname: String,
    email: String,
}

Position: {
    id: ID,
    name: String,
    status: Boolean,
}

Match: {
    id: ID,
    user: ID,
    position: ID,
    score: Int
}

```

> Yukarıda verilen database şemasına göre aşağıdaki graphql cevabının gelmesi beklenir.

### Graphql response

```json

"match": {
    "score": 100,
    "position": {
        "name": "Good position",
        "status": true,
    },
    "user": {
        "fullname": "Aaron Swartz"
        "email": "aaronswartz@gmail.com"

    }
}
```

---

## Frontend

### React application

![Signup A (1)](https://user-images.githubusercontent.com/6208736/150119166-1eb141ea-94af-460e-a05c-5ce1195d3f50.png)

EasyGraph uygulamasında query ve mutation'ların görüntülendiği alan vardır. (bu durum için mutation gerekmez.)
Görüntülenen her query ve altındaki field için birer checkbox bulunur. Eğer ana type altındaki herhangi bir type'ın subfield'ları var ise o fieldlar da seçilebilir.
Generate butonuna tıklandığı durumda sağ tarafta text olarak easyGraph hazır! volia 🎉

## Kaynaklar

- https://medium.com/@mrthankyou/how-to-get-a-graphql-schema-28915025de0e
- https://graphql.org/learn/introspection/
- https://github.com/codemirror/CodeMirror

## Açıklamalar

- Hızlı ve daha rahat development ortamı için
  - Json database kullanılabilir.
  - create-react-app ile React uygulaması kurulabilir.
- Repo içerisinde develop branch'i vardır. Bu repoyu forklayarak üzerinde geliştirmelerini yapabilirsin. Hazır olduğu durumda bu repoya pull request açabilirisin. Herhangi bir durum olduğunda liva@talentgrid.io hesabına mail atabilirsin.
- Eğer açılan pull request master branch'ine merge edilmişse Tebrikler 🚀 birlikte talentgrid ekosistemini geliştirmeye başladık demektir. Eğer istersen bu easyGraph uygulamasını açık kaynak olarak tüm dünyaya sunabiliriz.

Başarılar 🤜
