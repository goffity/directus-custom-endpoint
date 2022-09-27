include .env
export $(shell sed 's/=.*//' .env)
.PHONY: build run

default: run

image:
	docker build -t directus-custom-endpoint .
run: image
	docker compose up --force-recreate --remove-orphans
down:
	docker compose down
logs:
	docker compose logs -f
