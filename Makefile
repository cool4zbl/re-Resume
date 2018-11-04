build:
	PUBLIC_PATH='resume' yarn build

copy2blog:
	cp -r dist/ ../blog/resume/
