# Coffee Ordering System — Test Plan

## 1. Танилцуулга
Энэхүү тестлэлийн төлөвлөгөө нь Coffee Ordering System–ийн функциональ ба функциональ бус шаардлагуудыг шалгах, системийн найдвартай байдал, хүртээмж, гүйцэтгэл болон аюулгүй байдлыг баталгаажуулах зорилготой.

## 2. Тестлэх хамрах хүрээ
### Функциональ хэсгүүд:
- Хэрэглэгч бүртгүүлэх, нэвтрэх (Auth)
- Меню харах
- Сагс (Add to cart)
- Захиалга үүсгэх
- Захиалгын төлөв шалгах
- Админ: Меню CRUD
- Админ: Захиалга удирдах

### Функциональ бус:
- Үр ашиг, хурд
- Найдвартай байдал
- Аюулгүй байдал
- Хүртээмж
- UX ашиглахад хялбар байдал

## 3. Тестийн стратеги
- **Unit testing** — Backend service, controller logic
- **Component testing** — Frontend UI components
- **Integration testing** — Backend API + DB холболт
- **End-to-End (E2E)** — UI → Backend → DB
- **Smoke Testing** — Deploy бүрийн дараа
- **Regression testing** — Major update бүрийн дараа

## 4. Тестийн тохиолдлууд (жишээ)
| TC ID | Requirement | Test Case | Expected Result |
|------|-------------|------------|-----------------|
| TC-001 | REQ-001 | Хэрэглэгч зөв мэдээллээр бүртгэгдэх | “success” message |
| TC-002 | REQ-002 | Меню жагсаалт авах | 200 OK + menu list |
| TC-003 | REQ-004 | Сагсанд бараа нэмэх | Item added |

## 5. Мөшгөлтийн матриц
Мөшгөлтийн матрицыг `traceability-matrix.csv` файлд оруулсан.

## 6. Тест орчин
- Backend: Node.js 18, Express, Jest, Supertest
- Frontend: Next.js, Cypress
- DB: PostgreSQL 15
- Container: Docker Compose

## 7. Амжилтын шалгуур
- Unit test: ≥ 80% coverage
- Critical bug = 0
- High bug ≤ 2
- E2E test = 100% green

## 8. Эрсдэл ба бууруулах арга
- DB unavailable → Docker healthcheck
- Network fail → Retry logic
- Auth leakage → JWT expiry + validation

## 9. Дүгнэлт
Энэхүү тест план нь системийн чанар, найдвартай байдлыг хангаж, хөгжүүлэлтийн явцад давтагдсан асуудлаас сэргийлэх зорилготой.
