# ♻ WasteIQ — AI Powered Waste Classification System

> An end-to-end deep learning system that classifies waste from images and provides detailed recycling and disposal suggestions.

---

## Features

- Classifies waste into 8 categories from a single image
- Shows biodegradable / non-biodegradable status
- Displays confidence score with animated progress bar
- Provides detailed 3-4 sentence recycling and disposal suggestions
- Reusable and recyclable status per waste class
- 6-page professional web frontend
- User and Admin login system
- Admin panel with form for future class expansion
- FastAPI REST backend with auto-generated API docs at `/docs`

---

## Waste Categories

| Class | Biodegradable | Reusable | Recyclable | Bin |
|---|---|---|---|---|
| Plastic | No | Yes | Yes | Blue |
| Paper | Yes | Yes | Yes | Blue |
| Glass | No | Yes | Yes | Blue |
| Metal | No | Yes | Yes | Blue |
| Organic | Yes | No | No | Green |
| Hazardous | No | No | Yes | Red |
| Textile | No | Yes | No | Purple |
| General | No | No | No | Grey |

---

## Model Performance

| Metric | Value |
|---|---|
| Architecture | EfficientNetB0 (Transfer Learning) |
| Pretrained on | ImageNet |
| Training images | 9,713 |
| Classes | 8 |
| Test Accuracy | 96.52% |
| Test Loss | 0.1223 |
| Model size | 16.73 MB |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Model | TensorFlow 2.21 · Keras · EfficientNetB0 |
| Training | Google Colab · KaggleHub |
| Backend | FastAPI · Uvicorn · Python 3.12 |
| Frontend | HTML5 · CSS3 · JavaScript · Google Fonts |
| Version Control | Git · GitHub |

---

## Project Structure

```
waste-classification/
    backend/
        main.py          ← FastAPI app — routes and CORS
        model.py         ← Model loading and inference
        metadata.py      ← Per-class disposal metadata
    frontend/
        home.html        ← Landing page
        index.html       ← Classify page
        guide.html       ← Waste guide reference
        about.html       ← Project info and stats
        login.html       ← User and Admin login
        admin.html       ← Admin panel
        style.css        ← Shared styles
        script.js        ← Classify page logic
        login.js         ← Login logic
        admin.js         ← Admin panel logic
        home.css         ← Home page styles
        guide.css        ← Guide page styles
        about.css        ← About page styles
        login.css        ← Login page styles
        admin.css        ← Admin panel styles
    model/
        best_model.keras ← Trained model (download from Drive link below)
    Notebook/
        WasteIQ.ipynb    ← Training notebook (Google Colab)
    requirements.txt
    README.md
```

---

## Setup and Run

### 1. Clone the repository
```bash
git clone https://github.com/manpreet71/waste-classification.git
cd waste-classification
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Download the trained model
Download `best_model.keras` from [Google Drive](YOUR_DRIVE_LINK_HERE) and place it inside the `model/` folder.

### 4. Start the backend
```bash
cd backend
python main.py
```

Backend runs at `http://localhost:8000`  
API docs available at `http://localhost:8000/docs`

### 5. Open the frontend
Open `frontend/home.html` in your browser.

---

## Dataset

| Detail | Value |
|---|---|
| Source | Kaggle — Garbage Classification by Mostafa Abla |
| Original classes | 12 |
| After merging | 8 final classes |
| Class balancing | Textile capped at 1,500 images |
| Total images | 9,713 |
| Train split | 6,795 images (70%) |
| Val split | 1,453 images (15%) |
| Test split | 1,465 images (15%) |

---

## API Reference

### POST `/predict`

Accepts a waste image and returns classification result.

**Request:** `multipart/form-data` with `file` field (image)

**Response:**
```json
{
  "waste_type": "plastic",
  "biodegradable": "No",
  "confidence": 95.28,
  "reusable": "Yes",
  "recyclable": "Yes",
  "disposal": "Check the plastic type and recycle if possible. Avoid single-use plastics."
}
```

### GET `/`

Health check — returns `{ "message": "WasteIQ API is running" }`

---

## Frontend Pages

| Page | File | Description |
|---|---|---|
| Home | home.html | Landing page with stats and how-it-works |
| Classify | index.html | Image upload and result card |
| Waste Guide | guide.html | Reference cards for all 8 classes |
| About | about.html | Model info, tech stack, dataset details |
| Login | login.html | Side-by-side User and Admin login |
| Admin Panel | admin.html | Class table and new class submission form |

---

## Future Enhancements

- Grad-CAM heatmap visualisation for model explainability
- Mobile application with TFLite on-device inference
- Database-backed authentication with JWT tokens
- Location-based disposal centre mapping via Google Maps API
- Admin panel model retraining pipeline activation
- Additional waste classes — e-waste, medical, construction debris

---

## Author

- **Name:** [Your Full Name]
- **Institution:** [Your College Name]
- **Department:** [Your Department]
- **Project:** Final Year Project — 2024-25
- **GitHub:** [@manpreet71](https://github.com/manpreet71)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
