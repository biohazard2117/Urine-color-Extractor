
# Urine-color Extractor

If you love Python and web development, you might enjoy this fun project that combines color finding models and web frameworks. In this project, you will use Python to create a color finding model that can detect the color of different urine protein in urine diptest. Then, you will use Django Framework to build a backend that can handle requests from the frontend. Finally, you will use React framework to create a beautiful and interactive frontend that can display the results of the color finding model.I hope you will also have fun playing with colors and images! 


## Installation
### Frontend : 
Install my project with npm

```bash
  cd client
  npm install
  npm run dev
```
NOTE: Frontend will be live on http://127.0.0.1:5173/

### Backend : 
Install my project with pip

```bash
  cd backend
  pip install -r "requirements.txt"
  python manage.py migrate
  python manage.py runserver
```
NOTE: Backend will be live on http://127.0.0.1:8000/
## API Reference

#### Get all items

```http
  POST /api/urine
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `file` | **Required**. Upload urine sample image|


