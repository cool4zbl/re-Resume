build:
	PUBLIC_PATH='resume' npm run build

copy2blog:
	cp -r dist/ ../blog/resume/

pdf:
	node ./scripts/export.js