insert into recipecategory
(name, position)
values
('Aufläufe & Gratins', 1),
('Brei', 2),
('Brot & Backwaren', 3),
('Desserts & Sweets', 4),
('Getränke & Sirups', 5),
('Hauptgerichte & Beilagen', 6),
('Kuchen, Torten & Gebäck', 7),
('Pasta & Pizza', 8),
('Salate', 9),
('Snacks', 10),
('Saucen, Dressings & Dips', 11),
('Suppen & Eintöpfe', 12);

insert into recipe
(name, portions, imgpath, recipecategory_id)
values
('AMadras Curry',4,'https://admin.matbz.com/1.jpg',7),
('BSun dried tomate parmesan chicken',4,'https://admin.matbz.com/2.jpg',7),
('CMadras Curry',4,'https://admin.matbz.com/1.jpg',7),
('DSun dried tomate parmesan chicken',4,'https://admin.matbz.com/2.jpg',7),
('Eadras Curry',4,'https://admin.matbz.com/1.jpg',7),
('Fun dried tomate parmesan chicken',4,'https://admin.matbz.com/2.jpg',7),
('Gadras Curry',4,'https://admin.matbz.com/1.jpg',7),
('Hun dried tomate parmesan chicken',4,'https://admin.matbz.com/2.jpg',7),
('Iadras Curry',4,'https://admin.matbz.com/1.jpg',7),
('Jun dried tomate parmesan chicken',4,'https://admin.matbz.com/2.jpg',7);

insert into ingredientgroup
(name, position, recipe_id)
values
('Sauce',2,2),
('Marinade',1,2);

insert into ingredient
(name, quantity, measurement, identifier, position, ingredientgroup_id)
values
('Jogurt',65,'g','j',1,2),
('Garam Masala',1,'TL','g',2,2),
('Kreuzkümmel',0.5,'TL','k',3,2),
('Chiliflocken',0.5,'TL','c',4,2),
('Sahne',200,'ml','s',1,1),
('Salz',1,'Prise','sz',3,1),
('Pfeffer',1,'EL','p',2,1);

insert into recipestep
(step, position, recipe_id)
values
('Marinade aus Jogurt %j%, Garam Masala %g%, Kreuzkümmel %k% und Chiliflocken %c% anrühren.',1,2),
('Mit Salz %sz% und Pfeffer %p% würzen.',3,2),
('Sahne %s% erhitzen.',2,2);

