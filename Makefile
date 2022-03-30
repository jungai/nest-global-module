.PHONY: install default clean build-libs

default:
	make clean
	make install

build-libs:
	pnpm run --filter @libs/* build

clean:
	find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + \

install:
	pnpm -r i