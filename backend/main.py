from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from model import predict

app = FastAPI(title="WasteIQ API")

# ── Allow frontend to talk to backend ──
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "WasteIQ API is running"}

@app.post("/predict")
async def predict_waste(file: UploadFile = File(...)):
    contents = await file.read()
    result   = predict(contents)
    return result

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)