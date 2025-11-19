# 🌍 MI Világa – Beta Version

## 📘 Mi ez?

**MI Világa** egy magyar nyelvű, gyerekbarát oktató webalkalmazás, amely mesterséges intelligenciát használ arra, hogy 8–12 éves gyerekeknek érthetően, játékosan és biztonságosan magyarázza el az informatikai és digitális világ alapjait.

Ez a verzió már tartalmaz egy működő **Gemini-alapú kérdezz-felelek chatbotot**, amely tanári stílusban válaszol a gyerekek kérdéseire.

---

## ✨ Funkciók

- ✅ **Kérdezz-felelek oldal** – élő AI tanár válaszol magyarul, gyerekbarát stílusban  
- ✅ **Gemini 2.0 Flash integráció** – gyors, biztonságos válaszok Google AI Studio API-n keresztül  
- ✅ **Tanári prompt** – türelmes, példákkal magyarázó válaszok  
- ✅ **Letisztult UI** – Tailwind CSS alapú, játékos színvilág  
- ✅ **Készen áll a bővítésre** – avatar, hangos válasz, animáció, témakörök

---

## 🧑‍💻 Telepítés

**Klónozd a repót**
```bash
git clone https://github.com/felhasznalo/mi-vilaga.git
cd mi-vilaga
```
**Telepítsd a függőségeket:**
```bash
npm install
```
**.env file létrehozása a projekt gyökerében**
```.env
GEMINI_API_KEY=AIza... (a saját Google AI Studio kulcsod)
```
**fejlesztői szerver indítása**
```bash
npm run dev
```
## 📁 Fájlstruktúra
```
app/
  api/
    ask/
      route.js       ← Gemini API hívás tanári prompttal
  kerdezz/
    page.tsx         ← Kérdezz-felelek UI és logika
public/
  styles/
    globals.css      ← Saját stílusok (gyerekbarát dizájn)
.env.local           ← API kulcs (ne oszd meg nyilvánosan)
```

## 🛠️ Technológiai stack
- Next.js 13+ – modern React keretrendszer
- Tailwind CSS – gyors és játékos stílusozás
- Google Gemini API – mesterséges intelligencia válaszokhoz
- Node.js – szerver oldali futtatás

## 🎓 Oktatási cél
Ez a projekt célja, hogy:
- Segítse a gyerekeket megérteni a digitális világot
- Bátorítsa a kérdezést és a kíváncsiságot
- Biztonságos, magyar nyelvű AI tanárt biztosítson
- Támogassa a szülőket és pedagógusokat a digitális nevelésben

## 📜 Licenc
Ez a projekt nyílt forráskódú, oktatási célra szabadon felhasználható.
Kérlek, ne használd kereskedelmi célra a gyerekek biztonsága érdekében.

## 🤝 Közreműködés
Ha szeretnél hozzájárulni, hibát jelenteni vagy ötletet adni, nyugodtan nyiss egy issue-t vagy pull requestet.
A projekt célja, hogy közösségi tudásbázissá váljon a magyar gyerekek számára.




# 🌍 MI Világa – Beta Version

## 📘 What is this?

**MI Világa** is a Hungarian-language, child-friendly educational web application that uses artificial intelligence to explain the basics of the digital world in a playful, safe, and understandable way for children aged 8–12.

This beta version already includes a working **Gemini-powered Q&A chatbot**, which answers children’s questions in a teacher-like style.

---

## ✨ Features

- ✅ **Q&A page** – live AI teacher answers in Hungarian, child-friendly style  
- ✅ **Gemini 2.0 Flash integration** – fast, safe answers via Google AI Studio API  
- ✅ **Teacher prompt** – patient, example-based explanations  
- ✅ **Clean UI** – Tailwind CSS-based playful design  
- ✅ **Ready for expansion** – avatar, voice answers, animations, topic modules  

---

## 🧑‍💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/username/mi-vilaga.git
cd mi-vilaga
```

**Install dependencies:**
```bash
npm install
```

**Create an .env file in the project root**
```GEMINI_API_KEY=AIza... (your own Google AI Studio key)```

**Start the development server**
```npm run dev```

## 📁 File Structure
```
app/
  api/
    ask/
      route.js       ← Gemini API call with teacher prompt
  kerdezz/
    page.tsx         ← Q&A UI and logic
public/
  styles/
    globals.css      ← Custom styles (child-friendly design)
.env.local           ← API key (do not share publicly)
```

## 🛠️ Tech Stack
Next.js 13+ – modern React framework
Tailwind CSS – fast and playful styling
Google Gemini API – AI-powered answers
Node.js – server-side runtime

## 🎓 Educational Purpose
This project aims to:
Help children understand the digital world
Encourage curiosity and asking questions
Provide a safe, Hungarian-language AI teacher
Support parents and educators in digital education

## 📜 License
This project is open-source and free to use for educational purposes.
Please do not use it for commercial purposes to ensure children’s safety.

## 🤝 Contributing
If you’d like to contribute, report a bug, or share ideas, feel free to open an issue or pull request.
The goal is to make this project a community-driven knowledge base for Hungarian children.



