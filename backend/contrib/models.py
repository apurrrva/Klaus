from django.db import models

class People(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name

    @property
    def assigned_gifts(self):
        # Returns all gifts assigned to this friend
        return self.gift_set.all()

    def add_gift(self, gift):
        """Assign a gift to this person."""
        self.gifts.add(gift)
        self.save()

    def remove_gift(self, gift):
        """Remove an assigned gift from this person."""
        self.gifts.remove(gift)
        self.save()

    def get_assigned_gifts(self):
        """Return a queryset of all Gift objects assigned to this person."""
        return self.gifts.all()

class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    password = models.CharField(max_length=128)
    friendlist = models.ManyToManyField(People, blank=True, related_name='friends_of')

    def __str__(self):
        return self.name
    
    def add_person(self, person):
        """Add a People instance to user's friend list."""
        self.friendlist.add(person)
        self.save()

    def remove_person(self, person):
        """Remove a People instance from user's friend list."""
        self.friendlist.remove(person)
        self.save()

    def get_personlist(self):
        """Return a queryset of People who are the user's friends."""
        return self.friendlist.all()

    def get_person_names(self):
        """Return a list of names of all the user's friends."""
        return list(self.friendlist.values_list('name', flat=True))

    def get_person_count(self):
        """Return the number of friends the user has."""
        return self.friendlist.count()
    

class Gift(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gift_images/')  # Requires Pillow
    keywords = models.CharField(max_length=300, help_text="Comma-separated keywords")
    price_min = models.DecimalField(max_digits=8, decimal_places=2)
    price_max = models.DecimalField(max_digits=8, decimal_places=2)
    link = models.URLField()
    assigned_to = models.ManyToManyField(People, related_name='gifts', blank=True)

    def __str__(self):
        return self.title

