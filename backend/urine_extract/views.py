import os.path

from rest_framework.generics import GenericAPIView

from .models import File
from .serializer import FileSerializer
from django.http import JsonResponse
from rest_framework import status
from utils.color_detection import extract_colors
from core.settings import MEDIA_ROOT

class SampleUploadView(GenericAPIView):
    serializer_class = FileSerializer
    
    def get(self, request): 
        return JsonResponse({"success": "Working Fine"}, status=status.HTTP_200_OK)
        
        
    def post(self, request):
        file = request.FILES.get('file')
        if file is None: 
            return JsonResponse({"success": "false", "message":"Choose the file"}, status=status.HTTP_400_BAD_REQUEST)
        res = File.objects.create(file=file)
        colors = extract_colors(os.path.join(MEDIA_ROOT, res.file.name))
        return JsonResponse({
            "success": "true",
            "result": {
                'URO': colors[0],
                'BIL': colors[1],
                'KET': colors[2],
                'BLD': colors[3],
                'PRO': colors[4],
                'NIT': colors[5],
                'LEU': colors[6],
                'GLU': colors[7],
                'SG': colors[8],
                'PH': colors[9]
            }
        }, status=status.HTTP_200_OK)
