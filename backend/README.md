
☕ Bi Coffee – Backend Service

Энэ төсөл нь кофе захиалгын системийн backend хэсэг бөгөөд Node.js + TypeScript + Express + Prisma ашиглан бүтээгдсэн. 
Сервис нь кофе продуктын мэдээлэл, захиалга, хэрэглэгчийн хүсэлт зэрэгт зориулсан REST API–уудыг агуулна.

Фолдерийн бүтэц
backend/
 ├─ src/
 │   ├─ app.ts                 // Express аппын үндсэн тохиргоо
     |_config/
 │   |    └─ db.ts
 │   |    └─ nv.ts
 │   ├─ server.ts              // Сервер асаах файл
 │   ├─ routes/
 │   │    └─ coffee.routes.ts  // Coffee API чиглүүлэлтүүд
 │   ├─ controllers/
 │   │    └─ coffee.controller.ts // Request → Response логик
 │   ├─ services/
 │   │    └─ coffee.service.ts // Бизнес логик
 │   ├─ models/
 │   │    └─ coffee.model.ts   // Prisma model / өгөгдлийн давхарга
 │   ├─ database/
 │   │    └─ prisma.ts         // Prisma Client instance
 │   ├─ tests/
 │   │    └─ health.test.ts    // Тестүүд
 │   ├─ types/
 │   │    └─ coffee.types.ts   // Coffee интерфэйс, төрөл
 │   └─ utils/
 │        └─ errorHandler.ts   // Алдаа баригч middleware
 ├─ package.json
 ├─ tsconfig.json
 ├─ .env
 └─ README.md
# Backend README

Төслийг ажиллуулах
1️⃣ Repo–г татах
git clone <repo-url>
cd backend

2️⃣ Хамааралууудыг суулгах
npm install

3️⃣ Орчны тохиргоо (.env)
DATABASE_URL="postgresql://user:password@localhost:5432/coffee_db"
PORT=5000

4️⃣ Prisma миграци ажиллуулах
npx prisma migrate dev

5️⃣ Сервер асаах

Development:

npm run dev


Production:

npm run build
npm start

🧪 Тест ажиллуулах
npm run test

🛠 Ашигласан технологиуд

Node.js

Express.js

TypeScript

Prisma ORM

Jest (Testing)

PostgreSQL

🌐 API Overview
✔ Health Check
GET /health
Response: { status: "ok" }

✔ Coffee List
GET /api/coffee

✔ Coffee Detail
GET /api/coffee/:id

✔ Create Coffee
POST /api/coffee
Body: {
  "name": "Latte",
  "price": 7500,
  "size": "Medium"
}

✔ Update Coffee
PUT /api/coffee/:id

✔ Delete Coffee
DELETE /api/coffee/:id

📌 Фолдерийн тайлбар
🔹 routes/

API–ийн endpoint–үүдийг тодорхойлно.

🔹 controllers/

Request → service → response урсгалыг удирдана.

🔹 services/

Бизнес логик байрлана (жишээ: кофе нэмэх, устгах).

🔹 models/

Prisma–ийн өгөгдлийн загвар.

🔹 database/

Prisma Client instance.

🔹 utils/

Алдаа боловсруулах, туслах функцууд.

🔹 types/

TypeScript интерфэйсүүд.

🔹 tests/

Jest unit тестүүд.

📄 Лиценз

MIT License – хүссэнээрээ ашиглах боломжтой.


route map (түлхүүр endpoints)

GET /api/coffee — list coffees

GET /api/coffee/:id — get coffee

POST /api/coffee — create coffee

PUT /api/coffee/:id — update coffee

DELETE /api/coffee/:id — delete coffee

GET /api/extras — list extras

GET /api/extras/:id — get extra

POST /api/extras — create extra

PUT /api/extras/:id — update extra

DELETE /api/extras/:id — delete extra

GET /api/orders — list orders (summary)

GET /api/orders/:id — get order with items

POST /api/orders — create order (transactional: order + items)