import numpy as np
from PIL import Image
from io import BytesIO
import tensorflow as tf
from metadata import METADATA

# ── Config ──
IMG_SIZE    = (224, 224)
CLASS_NAMES = ['general', 'glass', 'hazardous', 'metal',
               'organic', 'paper', 'plastic', 'textile']

# ── Load model once at startup ──
model = tf.keras.models.load_model("../model/best_model.keras")
print("Model loaded successfully.")


def predict(image_bytes: bytes) -> dict:
    # ── Load and preprocess image ──
    img       = Image.open(BytesIO(image_bytes)).convert("RGB")
    img       = img.resize(IMG_SIZE)
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)

    # ── Predict ──
    predictions = model.predict(img_array, verbose=0)
    confidence  = float(np.max(predictions)) * 100
    class_index = int(np.argmax(predictions))
    waste_type  = CLASS_NAMES[class_index]

    # ── Get metadata ──
    meta = METADATA[waste_type]

    return {
        "waste_type"    : waste_type,
        "biodegradable" : meta["biodegradable"],
        "confidence"    : round(confidence, 2),
        "reusable"      : meta["reusable"],
        "recyclable"    : meta["recyclable"],
        "disposal"      : meta["disposal"]
    }