setup: install
	npx simple-git-hooks

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

update-deps:
	npx ncu -u