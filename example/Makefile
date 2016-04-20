BIN := $(PWD)/node_modules/.bin

all: node_modules
	$(MAKE) _make -j2

dist/index.css:
	$(BIN)/node-sass src/index.scss -o dist/

watch:
	$(BIN)/node-sass src/index.scss --watch -o dist/

bemagic: dist/index.css
	../bin/bemagic --config bemagic.config.js $?

_make: watch bemagic
