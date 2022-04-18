from importlib.resources import path
from store import views


urlpatterns = [
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('main/', views.main, name='main'),
    path('store/', views.store, name='store'),
]