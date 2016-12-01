from rest_framework.viewsets import ModelViewSet

from .models import List, Card
from .serializers import ListSerializer, CardSerializer


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

