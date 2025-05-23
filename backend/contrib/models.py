from django.db import models

#Mock models for profiles, swipe and recommendation (no products here) (main data in fakestoreapi)

class UserProfile(models.Model):
    user_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=50, blank=True)
    keywords = models.JSONField()  # List of interests, e.g., ["books", "tech"]
    budget_min = models.DecimalField(max_digits=10, decimal_places=2)
    budget_max = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Swipe(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    product_id = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=[('right', 'Right'), ('left', 'Left')])
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.name} swiped {self.status} on {self.product_id}"

class Recommendation(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    product_id = models.CharField(max_length=100)
    score = models.FloatField()  # Recommendation score (0-1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Recommendation {self.product_id} for {self.user.name} (score: {self.score})"
