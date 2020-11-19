build:
	PUBLIC_PATH='resume' npm run build

build-2020:
	PUBLIC_PATH='resume-2020' npm run build

copy2blog:
	cp -r dist/ ../blog/resume/

pdf:
	node ./scripts/export.js