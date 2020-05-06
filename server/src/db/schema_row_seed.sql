insert into recipecategory
(name, position)
values
('Vorspeisen', 1),
('Hauptspeisen', 2),
('Nachspeisen', 3),
('Backen', 4),
('Salate & Snacks', 5),
('Saucen & Dressings', 6);

insert into recipe
(name, portions, recipecategory_id)
values
('Madras Curry',4,2),
('Sun dried tomate parmesan chicken',4,2);

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

