# ♻ WasteIQ — AI Powered Waste Classification System

A deep learning based waste classification system that identifies waste from images and provides recycling suggestions.

---

## Demo

Upload a waste image → Get instant classification → View disposal suggestion

<img width="1919" height="966" alt="Screenshot 2026-03-29 182345" src="https://github.com/user-attachments/assets/6de54ca4-f0f0-4762-af54-6cb492aaa78d" />
<img width="1919" height="964" alt="Screenshot 2026-03-29 182407" src="https://github.com/user-attachments/assets/8ed74654-1246-4eea-b516-f8e7413dbdb8" />


---

## Features

- Classifies waste into 8 categories
- Shows biodegradable / non-biodegradable status
- Displays confidence score with visual bar
- Provides actionable recycling and disposal suggestions
- Clean eco-themed frontend UI
- FastAPI REST backend

---

## Waste Categories

| Class | Biodegradable | Recyclable |
|---|---|---|
| Plastic | No | Yes |
| Paper | Yes | Yes |
| Glass | No | Yes |
| Metal | No | Yes |
| Organic | Yes | No |
| Hazardous | No | Yes |
| Textile | No | No |
| General | No | No |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Model | EfficientNetB0 (TensorFlow/Keras) |
| Backend | FastAPI |
| Frontend | HTML, CSS, JavaScript |
| Training | Google Colab |
| Dataset | Garbage Classification (Kaggle) |

---

## Model Performance

- Training images : 9,713
- Classes : 8
- Test Accuracy : 96.52%
- Architecture : EfficientNetB0 + custom head

---

## Project Structure
```
waste-classification/
    backend/
        main.py          ← FastAPI app
        model.py         ← prediction logic
        metadata.py      ← disposal info per class
    frontend/
        index.html       ← UI
        style.css        ← styling
        script.js        ← API calls
    model/
        best_model.keras ← trained model (not included, see below)
    requirements.txt
    README.md
```

---

## Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/manpreet71/waste-classification.git
cd waste-classification
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Add the model
Download `best_model.keras` from [Google Drive](https://drive.google.com/file/d/1lay9BFkyMMLa8nTZWEBihJBaTwDhUJBB/view?usp=sharing) and place it in the `model/` folder.

### 4. Run the backend
```bash
cd backend
python main.py
```

### 5. Open the frontend
Open `frontend/index.html` in your browser.

---

## Dataset

- Source: [Garbage Classification — Kaggle](https://www.kaggle.com/datasets/mostafaabla/garbage-classification)
- Original classes: 12
- Merged into: 8 final classes
- Total images after cleaning: 9,713

---

## Author

- Name: Manpreet Singh
- Institution: Khalsa College, Amritsar
- Project: Final Year Project — 2026
