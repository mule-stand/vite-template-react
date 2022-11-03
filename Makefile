up:
	docker compose up --detach

down:
	docker compose down --remove-orphans --volumes

restart: down up

app-dev:
	docker compose up app --detach

app-restart: down app-dev

app-build:
	docker compose run --rm app-node-cli pnpm build

app-install:
	docker compose run --rm app-node-cli pnpm install

app-lint:
	docker compose run --rm app-node-cli pnpm run lint

app-fix:
	docker compose run --rm app-node-cli pnpm run fix

