CREATE TABLE IF NOT EXISTS "user" (
	id serial primary key,
	username text unique not null,
	password text not null
)

CREATE TABLE IF NOT EXISTS recipecategory (
	id serial primary key,
	name text not null,
  position integer default 999,
	imgpath text default null
)

CREATE TABLE IF NOT EXISTS recipe (
	id serial primary key,
	name text not null,
  portions integer not null,
	imgpath text default null,
  recipecategory_id integer not null,
  foreign key (recipecategory_id) references recipecategory(id)
)

CREATE TABLE IF NOT EXISTS tag (
	id serial primary key,
	name text not null,
  imgpath text default null
)

CREATE TABLE IF NOT EXISTS ingredientgroup (
	id serial primary key,
	name text not null,
	position integer default 999,
  recipe_id integer not null,
  foreign key (recipe_id) references recipe(id)
)

CREATE TABLE IF NOT EXISTS ingredient (
	id serial primary key,
	name text not null,
	quantity numeric(14,2) not null,
  measurement text not null,
  identifier text default null,
  position integer default 999,
  ingredientgroup_id integer not null,
  foreign key (ingredientgroup_id) references ingredientgroup(id)
)

CREATE TABLE IF NOT EXISTS recipestep (
	id serial primary key,
	step text not null,
	position integer default 999,
  recipe_id integer not null,
  foreign key (recipe_id) references recipe(id)
)

CREATE TABLE IF NOT EXISTS recipe_tag (
	id serial primary key,
  recipe_id integer not null,
  tag_id integer not null,
  foreign key (recipe_id) references recipe(id)
  foreign key (tag_id) references tag(id),
)
