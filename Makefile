build:
	PUBLIC_PATH='resume' npm run build
	npm run export

pdf:
	node ./scripts/export.js

build-2020:
	PUBLIC_PATH='resume-2020' npm run build

copy2blog:
	cp -r dist/ ../blog/resume/

copy2gh:
	cp -r ./dist/** ../cool4zbl.github.io/resume/